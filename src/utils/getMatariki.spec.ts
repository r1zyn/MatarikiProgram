import type { MatarikiResult } from "../types";
import getMatariki from "./getMatariki";

describe("Get the date for the Matariki public holiday", (): void => {
    let mockPointer: Date;
    let mockHoliday: Date;

    beforeEach((): void => {
        mockPointer = new Date(2022, 5, 22);
        mockHoliday = new Date(2022, 5, 24);
    });

    test("2022", (): void => {
        const { pointer, holiday }: MatarikiResult = getMatariki("2022");

        expect(pointer.toLocaleDateString()).toBe(
            mockPointer.toLocaleDateString()
        );
        
        expect(holiday.toLocaleDateString()).toBe(
            mockHoliday.toLocaleDateString()
        );
    });
});
