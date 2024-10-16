import RageClick from './extensions/rageclick';
import { DecideResponse } from './types';
import { PostHog } from './posthog-core';
export declare class Autocapture {
    instance: PostHog;
    _initialized: boolean;
    _isDisabledServerSide: boolean | null;
    _elementSelectors: Set<string> | null;
    rageclicks: RageClick;
    _elementsChainAsString: boolean;
    constructor(instance: PostHog);
    private get config();
    _addDomEventHandlers(): void;
    startIfEnabled(): void;
    afterDecideResponse(response: DecideResponse): void;
    setElementSelectors(selectors: Set<string>): void;
    getElementSelectors(element: Element | null): string[] | null;
    get isEnabled(): boolean;
    private _previousElementSibling;
    private _getAugmentPropertiesFromElement;
    private _getPropertiesFromElement;
    private _getDefaultProperties;
    private _captureEvent;
    isBrowserSupported(): boolean;
}
