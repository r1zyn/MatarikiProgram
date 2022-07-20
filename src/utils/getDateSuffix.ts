/**
 * A function that returns the suffix for a given date.
 * @param {number} date The date to get the suffix for
 * @returns {string}
 */
export default function getDateSuffix(date: number): string {
    if (date > 3 && date < 21) return "th";
    switch (date % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    };
};