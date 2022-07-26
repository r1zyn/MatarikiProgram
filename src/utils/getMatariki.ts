import type { MatarikiResult } from "../types";
import closestFriday from "./closestFriday";
// import lune from "lune";
import lunar from "lunar";

/**
 * Function that returns the Matariki public holiday for a given year
 * and the first day of the Tangaroa date (or referrenced in the program as "pointer" date)
 * @param {string} year The year to find the Matariki public holiday
 * @returns
 */
export default function getMatariki(year: string): MatarikiResult {
    /**
     * The date of the first day of the Tangaroa period.
     * @type {Date}
     */
    // const pointer: Date = lune.phase_hunt(
    //     new Date(parseInt(year), 4, 18)
    // ).nextnew_date;
    // pointer.setDate(pointer.getDate() + 22);

    /**
     * Pointer date we can use to predict the Matariki public holiday.
     * AKA the date of the first day of the Tangaroa period.
     * @type {Date}
     */
    const pointer: Date = lunar([parseInt(year), 4, 23, true]).toDate();

    /**
     * Date object representing the Matariki public holiday.
     * @type {Date}
     */
    const holiday: Date = closestFriday(pointer);

    return {
        holiday,
        pointer
    };
}
