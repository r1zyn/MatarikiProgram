import getDateSuffix from "./getDateSuffix";
import getDay from "./getDay";
import getMonth from "./getMonth";

/**
 * Function that parses a Date object and converts it into a readable string.
 * @param {Date} date The date to parse.
 * @returns {string}
 */
export default function parseDate(date: Date): string {
    return `${getDay(date.getDay())} ${date.getDate()}${getDateSuffix(
        date.getDate()
    )} ${getMonth(date.getMonth())} ${date.getFullYear()}`;
}
