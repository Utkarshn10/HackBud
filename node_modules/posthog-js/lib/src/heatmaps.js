var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { includes, registerEvent } from './utils';
import RageClick from './extensions/rageclick';
import { document, window } from './utils/globals';
import { getEventTarget, getParentElement, isElementNode, isTag } from './autocapture-utils';
import { HEATMAPS_ENABLED_SERVER_SIDE, TOOLBAR_ID } from './constants';
import { isEmptyObject, isObject, isUndefined } from './utils/type-utils';
import { logger } from './utils/logger';
var DEFAULT_FLUSH_INTERVAL = 5000;
var HEATMAPS = 'heatmaps';
var LOGGER_PREFIX = '[' + HEATMAPS + ']';
function elementOrParentPositionMatches(el, matches, breakOnElement) {
    var curEl = el;
    while (curEl && isElementNode(curEl) && !isTag(curEl, 'body')) {
        if (curEl === breakOnElement) {
            return false;
        }
        if (includes(matches, window === null || window === void 0 ? void 0 : window.getComputedStyle(curEl).position)) {
            return true;
        }
        curEl = getParentElement(curEl);
    }
    return false;
}
function elementInToolbar(el) {
    var _a;
    // NOTE: .closest is not supported in IE11 hence the operator check
    return el.id === TOOLBAR_ID || !!((_a = el.closest) === null || _a === void 0 ? void 0 : _a.call(el, '#' + TOOLBAR_ID));
}
var Heatmaps = /** @class */ (function () {
    function Heatmaps(instance) {
        var _this = this;
        var _a;
        this.rageclicks = new RageClick();
        this._enabledServerSide = false;
        this._initialized = false;
        this._flushInterval = null;
        this.instance = instance;
        this._enabledServerSide = !!((_a = this.instance.persistence) === null || _a === void 0 ? void 0 : _a.props[HEATMAPS_ENABLED_SERVER_SIDE]);
        window === null || window === void 0 ? void 0 : window.addEventListener('beforeunload', function () {
            _this.flush();
        });
    }
    Object.defineProperty(Heatmaps.prototype, "flushIntervalMilliseconds", {
        get: function () {
            var flushInterval = DEFAULT_FLUSH_INTERVAL;
            if (isObject(this.instance.config.capture_heatmaps) &&
                this.instance.config.capture_heatmaps.flush_interval_milliseconds) {
                flushInterval = this.instance.config.capture_heatmaps.flush_interval_milliseconds;
            }
            return flushInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Heatmaps.prototype, "isEnabled", {
        get: function () {
            if (!isUndefined(this.instance.config.capture_heatmaps)) {
                return this.instance.config.capture_heatmaps !== false;
            }
            if (!isUndefined(this.instance.config.enable_heatmaps)) {
                return this.instance.config.enable_heatmaps;
            }
            return this._enabledServerSide;
        },
        enumerable: false,
        configurable: true
    });
    Heatmaps.prototype.startIfEnabled = function () {
        var _a;
        if (this.isEnabled) {
            // nested if here since we only want to run the else
            // if this.enabled === false
            // not if this method is called more than once
            if (this._initialized) {
                return;
            }
            logger.info(LOGGER_PREFIX + ' starting...');
            this._setupListeners();
            this._flushInterval = setInterval(this.flush.bind(this), this.flushIntervalMilliseconds);
        }
        else {
            clearInterval((_a = this._flushInterval) !== null && _a !== void 0 ? _a : undefined);
            this.getAndClearBuffer();
        }
    };
    Heatmaps.prototype.afterDecideResponse = function (response) {
        var _a;
        var optIn = !!response['heatmaps'];
        if (this.instance.persistence) {
            this.instance.persistence.register((_a = {},
                _a[HEATMAPS_ENABLED_SERVER_SIDE] = optIn,
                _a));
        }
        // store this in-memory in case persistence is disabled
        this._enabledServerSide = optIn;
        this.startIfEnabled();
    };
    Heatmaps.prototype.getAndClearBuffer = function () {
        var buffer = this.buffer;
        this.buffer = undefined;
        return buffer;
    };
    Heatmaps.prototype._setupListeners = function () {
        var _this = this;
        if (!window || !document) {
            return;
        }
        registerEvent(document, 'click', function (e) { return _this._onClick((e || (window === null || window === void 0 ? void 0 : window.event))); }, false, true);
        registerEvent(document, 'mousemove', function (e) { return _this._onMouseMove((e || (window === null || window === void 0 ? void 0 : window.event))); }, false, true);
        this._initialized = true;
    };
    Heatmaps.prototype._getProperties = function (e, type) {
        // We need to know if the target element is fixed or not
        // If fixed then we won't account for scrolling
        // If not then we will account for scrolling
        var scrollY = this.instance.scrollManager.scrollY();
        var scrollX = this.instance.scrollManager.scrollX();
        var scrollElement = this.instance.scrollManager.scrollElement();
        var isFixedOrSticky = elementOrParentPositionMatches(getEventTarget(e), ['fixed', 'sticky'], scrollElement);
        return {
            x: e.clientX + (isFixedOrSticky ? 0 : scrollX),
            y: e.clientY + (isFixedOrSticky ? 0 : scrollY),
            target_fixed: isFixedOrSticky,
            type: type,
        };
    };
    Heatmaps.prototype._onClick = function (e) {
        var _a;
        if (elementInToolbar(e.target)) {
            return;
        }
        var properties = this._getProperties(e, 'click');
        if ((_a = this.rageclicks) === null || _a === void 0 ? void 0 : _a.isRageClick(e.clientX, e.clientY, new Date().getTime())) {
            this._capture(__assign(__assign({}, properties), { type: 'rageclick' }));
        }
        // TODO: Detect deadclicks
        this._capture(properties);
    };
    Heatmaps.prototype._onMouseMove = function (e) {
        var _this = this;
        if (elementInToolbar(e.target)) {
            return;
        }
        clearTimeout(this._mouseMoveTimeout);
        this._mouseMoveTimeout = setTimeout(function () {
            _this._capture(_this._getProperties(e, 'mousemove'));
        }, 500);
    };
    Heatmaps.prototype._capture = function (properties) {
        if (!window) {
            return;
        }
        // TODO we should be able to mask this
        var url = window.location.href;
        this.buffer = this.buffer || {};
        if (!this.buffer[url]) {
            this.buffer[url] = [];
        }
        this.buffer[url].push(properties);
    };
    Heatmaps.prototype.flush = function () {
        if (!this.buffer || isEmptyObject(this.buffer)) {
            return;
        }
        this.instance.capture('$$heatmap', {
            $heatmap_data: this.getAndClearBuffer(),
        });
    };
    return Heatmaps;
}());
export { Heatmaps };
//# sourceMappingURL=heatmaps.js.map