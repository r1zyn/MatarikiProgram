import type { MatarikiResult } from "../types";
import closestFriday from "./closestFriday";
import lunar from "lunar";

/**
 * Function that returns the Matariki public holiday for a given year
 * and it's pointer date.
 * @param {string} year The year to find the Matariki public holiday
 * @returns
 */
export default function getMatariki(year: string): MatarikiResult {
    /**
     * Pointer date we can use to predict the Matariki public holiday.
     * @type {Date}
     */
    const pointer: Date = lunar([parseInt(year), 4, 25, true]).toDate();

    /**
     * Date object representing the Matariki public holiday.
     * @type {Date}
     */
    const holiday: Date =
        pointer.getDay() === 5 ? pointer : closestFriday(pointer);

    return {
        holiday,
        pointer
    };
}
