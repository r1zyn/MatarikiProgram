/**
 * Gets the Friday closest to a given date.
 * @param {Date} date The date to get the closest Friday to
 * @returns {Date}
 */
export default function closestFriday(date: Date): Date {
    const day: number = date.getDay(); // Gets the day from the date
    const diff: number = (day < 5) ? (5 - day) : (12 - day); // Gets the duration between the date and Friday
    return new Date(date.getTime() + diff * 24 * 60 * 60 * 1000); // Returns the Date object for the closest Friday
};