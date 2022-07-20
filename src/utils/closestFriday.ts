export default function closestFriday(date: Date): Date {
    const day: number = date.getDay();
    const diff: number = (day < 5) ? (5 - day) : (12 - day);
    return new Date(date.getTime() + diff * 24 * 60 * 60 * 1000);
};