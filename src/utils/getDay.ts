/**
 * Function that maps the day of the week to the corresponding day name.
 * @param {number} day The day of the week (0-6)
 * @returns {string}
 */
export default function getDay(day: number): string {
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Unknown";
    }
}
