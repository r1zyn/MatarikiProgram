import { CalendarChinese, GregorianDate } from "date-chinese";
import chalk from "chalk";
import closestFriday from "./utils/closestFriday";
import getDay from "./utils/getDay";
import getDateSuffix from "./utils/getDateSuffix";
import getMonth from "./utils/getMonth";
import readline from "readline";
import parseDate from "./utils/parseDate";

/**
 * Creates an interface that allows the user to interact with the terminal, and allows us to read user input.
 * @type {readline.Interface}
 */
const terminal: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// This will prompt the user to enter a year, so the program knows which year to determine the date of the Matariki public holiday.
terminal.question(`${chalk.blue("[program]")} Enter a year: `, (year: string): void => {
    if (!parseInt(year)) {
        console.log(`${chalk.red("[program]")} Error: Invalid year provided`); // If the year cannot be parsed to a number it won't be considered as a valid year, this is to prevent the program from crashing during fetching
        process.exit(1); // Exits the process
    } else {
        /**
         * Chinese Lunar Calendar date representing the Matariki public holiday in the Gregorian calendar.
         * @type {GregorianDate}
         */
        const chineseDate: GregorianDate = new CalendarChinese(60, parseInt(year), 4, 1, 23).toGregorian(parseInt(year));

        /**
         * Date representing the first day of the Tangaroa period.
         * @type {Date}
         */
        const tangaroaStartDate: Date = parseDate(chineseDate);

        /**
         * Date object representing the Matariki public holiday.
         * @type {Date}
         */
        const holiday: Date = closestFriday(tangaroaStartDate);

        console.log(`${chalk.blue("[program]")} The first day of the ${chalk.yellow("Tangaroa")} period is ${chalk.yellow(`${getDay(tangaroaStartDate.getDay())} ${tangaroaStartDate.getDate()}${getDateSuffix(tangaroaStartDate.getDate())} ${getMonth(tangaroaStartDate.getMonth())} ${tangaroaStartDate.getFullYear()}`)}`);
        console.log(`${chalk.blue("[program]")} The ${chalk.cyan("Matariki public holiday")} will occur on ${chalk.cyan(`${getDay(holiday.getDay())} ${holiday.getDate()}${getDateSuffix(holiday.getDate())} ${getMonth(holiday.getMonth())} ${holiday.getFullYear()}`)}`); // Logs the holiday date
    }

    terminal.close(); // Ends the terminal interaction
});

process.on("exit", (code: number): void => console.log(`${chalk.green("[process]")} Exiting process with code ${code}`)); // process exit listener event which tells us when the process has been exited with what code