import { PostHog } from './posthog-core';
import { DecideResponse, Properties } from './types';
export declare const BASE_ERROR_ENDPOINT_SUFFIX = "/e/";
export declare class PostHogExceptions {
    private readonly instance;
    private _endpointSuffix;
    constructor(instance: PostHog);
    get endpoint(): string;
    afterDecideResponse(response: DecideResponse): void;
    /**
     * :TRICKY: Make sure we batch these requests
     */
    sendExceptionEvent(properties: Properties): void;
}
