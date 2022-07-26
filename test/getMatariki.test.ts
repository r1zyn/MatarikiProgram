import type { MatarikiResult } from "../src/types";
import getMatariki from "../src/utils/getMatariki";

describe("Get the date for the Matariki public holiday", (): void => {
    let mockPointer: Date;
    let mockHoliday: Date;

    beforeEach((): void => {
        mockPointer = new Date(2022, 5, 20);
        mockHoliday = new Date(2022, 5, 24);
    });

    test("2022", (): void => {
        const { pointer, holiday }: MatarikiResult = getMatariki("2022");

        expect<string>(pointer.toLocaleDateString()).toBe<string>(
            mockPointer.toLocaleDateString()
        );

        expect<string>(holiday.toLocaleDateString()).toBe<string>(
            mockHoliday.toLocaleDateString()
        );
    });
});
