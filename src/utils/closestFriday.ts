/**
 * Gets the Friday closest to a given date.
 * @param {Date} fromDate The date to get the closest Friday to
 * @returns {Date}
 */
export default function closestFriday(fromDate: Date): Date {
    if (fromDate.getMonth() === 5 && fromDate.getDate() <= 19) {
        fromDate.setDate(fromDate.getDate() + 7); // If the pointer date is before or on the 19th of June, shift it a week forward (due to June 19th rule)
    }

    if (fromDate.getDay() === 5) {
        return fromDate; // If the day is Friday, keep it as it is
    }

    /**
     * The new Friday date to return.
     * @type {Date}
     */
    const returnValue: Date = new Date(fromDate);

    const difference: number = getDifferenceBetweenDays(5, fromDate.getDay()); // Get the difference between Friday and the day
    returnValue.setDate(returnValue.getDate() + difference); // Alter the date accordingly

    return returnValue; // Return the Friday dtae
}

/**
 * Function that gets the difference between two days.  
 * @param {number} start The starting day
 * @param {number} end The ending day
 * @returns {number}
 */
export function getDifferenceBetweenDays(
    start: number,
    end: number
): number {
    /**
     * The weekend days for Date.getDay().
     * @type {number[]}
     */
    const weekends: number[] = [0, 6];

    if (weekends.includes(end)) { // Checks if the day is a weekend, as if the first day of the Tangaroa period is a weekend, Matariki will be the Friday before, and vice-versa
        if (end === 0) {
            end = 7; // Change Sunday to index of 7 so we can get the day difference
        }

        return -(end - start); // Get the difference between the day and the previous Friday
    } else {
        return start - end; // Else, retun the difference between the day and the next Friday
    }
}
