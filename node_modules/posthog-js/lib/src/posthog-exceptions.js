import { EXCEPTION_CAPTURE_ENDPOINT_SUFFIX } from './constants';
import { isObject } from './utils/type-utils';
// TODO: move this to /x/ as default
export var BASE_ERROR_ENDPOINT_SUFFIX = '/e/';
var PostHogExceptions = /** @class */ (function () {
    function PostHogExceptions(instance) {
        var _a;
        this.instance = instance;
        // TODO: once BASE_ERROR_ENDPOINT_SUFFIX is no longer /e/ this can be removed
        this._endpointSuffix =
            ((_a = this.instance.persistence) === null || _a === void 0 ? void 0 : _a.props[EXCEPTION_CAPTURE_ENDPOINT_SUFFIX]) || BASE_ERROR_ENDPOINT_SUFFIX;
    }
    Object.defineProperty(PostHogExceptions.prototype, "endpoint", {
        get: function () {
            // Always respect any api_host set by the client config
            return this.instance.requestRouter.endpointFor('api', this._endpointSuffix);
        },
        enumerable: false,
        configurable: true
    });
    PostHogExceptions.prototype.afterDecideResponse = function (response) {
        var _a;
        var autocaptureExceptionsResponse = response.autocaptureExceptions;
        this._endpointSuffix = isObject(autocaptureExceptionsResponse)
            ? autocaptureExceptionsResponse.endpoint || BASE_ERROR_ENDPOINT_SUFFIX
            : BASE_ERROR_ENDPOINT_SUFFIX;
        if (this.instance.persistence) {
            // when we come to moving the endpoint to not /e/
            // we'll want that to persist between startup and decide response
            // TODO: once BASE_ENDPOINT is no longer /e/ this can be removed
            this.instance.persistence.register((_a = {},
                _a[EXCEPTION_CAPTURE_ENDPOINT_SUFFIX] = this._endpointSuffix,
                _a));
        }
    };
    /**
     * :TRICKY: Make sure we batch these requests
     */
    PostHogExceptions.prototype.sendExceptionEvent = function (properties) {
        this.instance.capture('$exception', properties, {
            _noTruncate: true,
            _batchKey: 'exceptionEvent',
            _url: this.endpoint,
        });
    };
    return PostHogExceptions;
}());
export { PostHogExceptions };
//# sourceMappingURL=posthog-exceptions.js.map