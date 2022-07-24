import { DateOptions } from "../types";

/**
 * Function that parses a type of Date object from the `date-chinese` library into a
 * useable `Date` object.
 * @param {DateOptions} options The date to parse.
 * @returns {Date}
 */
export default function parseDate({ day, month, year }: DateOptions): Date {
    return new Date(Date.parse(`${year}-${month}-${day}`));
};