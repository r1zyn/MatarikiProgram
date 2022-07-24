/**
 * Interface for the API response received from the Horizons API.
 * @property {string} result The stringified data from the API
 * @interface
 */
export interface APIResponse {
    /**
     * The result property containing the stringified data.
     * @type {string}
     */
    result: string;
}
