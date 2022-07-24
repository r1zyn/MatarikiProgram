import closestFriday from "../src/utils/closestFriday";

describe("Get the closest Friday for a given date", (): void => {
    let mockDates: Date[];
    let fridays: Date[];

    beforeEach((): void => {
        mockDates = [
            new Date(2022, 5, 24),
            new Date(2023, 6, 13),
            new Date(2024, 5, 29),
            new Date(2025, 5, 22)
        ];

        fridays = [
            new Date(2022, 5, 24),
            new Date(2023, 6, 14),
            new Date(2024, 5, 28),
            new Date(2025, 5, 20)
        ];
    });

    test("2022", (): void => {
        mockDates.forEach((date: Date, index: number): void => {
            expect(closestFriday(date).toLocaleDateString()).toBe(
                fridays[index].toLocaleDateString()
            );
        });
    });
});
