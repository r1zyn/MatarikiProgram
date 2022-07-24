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

/**
 * Options for the `parseDate` function.
 * @property {number} day The day of the month
 * @property {number} month The month of the year
 * @property {number} year The year
 * @interface
 */
export interface DateOptions {
    day: number;
    month: number;
    year: number;
}
