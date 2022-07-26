/**
 * A function that returns the suffix for a given date.
 * @param {number} date The date to get the suffix for
 * @returns {string}
 */
export default function getDateSuffix(date: number): string {
    if (date > 3 && date < 21) return "th"; // Return the "th" suffix for corresponding numbers
    switch (
        date % 10 // Uses modulo division to get the last digit of the date to determine the suffix
    ) {
        case 1:
            return "st"; // Return the "st" suffix for numbers ending with 1
        case 2:
            return "nd"; // Return the "nd" suffix for numbers ending with 2
        case 3:
            return "rd"; // Return the "rd" suffix for numbers ending with 3
        default:
            return "th"; // Return the "th" suffix for numbers ending with 4, 5, 6, 7, 8, 9
    }
}
