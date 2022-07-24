/**
 * Gets the Friday closest to a given date.
 * @param {Date} fromDate The date to get the closest Friday to
 * @returns {Date}
 */
export default function closestFriday(fromDate: Date): Date {
    const returnValue: Date = new Date(fromDate);

    const difference: number = getDifferenceBetweenDays(5, fromDate.getDay());
    returnValue.setDate(returnValue.getDate() + difference);

    return returnValue;
}

/**
 * Function that gets the difference between two days.
 * @param {number} start The starting date
 * @param {number} end The ending date
 * @param {number} weekLength The length of a week
 * @returns {number}
 */
export function getDifferenceBetweenDays(
    start: number,
    end: number,
    weekLength: number = 7
): number {
    if (end <= 1) {
        return -((weekLength - start) + end);
    } else {
        return start - end;
    }
}