/**
 * Interface for the data returned from the `getMatariki` function.
 * @property {Date} holiday The Matariki public holiday date
 * @property {Date} pointer The pointer date
 * @interface
 */
export interface MatarikiResult {
    /**
     * Pointer date we can use to predict the Matariki public holiday.
     * @type {Date}
     */
    pointer: Date;

    /**
     * Date object representing the Matariki public holiday.
     * @type {Date}
     */
    holiday: Date;
}
