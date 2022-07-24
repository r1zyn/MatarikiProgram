import chalk from "chalk";
import closestFriday from "./utils/closestFriday";
import lunar from "lunar";
import parseDate from "./utils/parseDate";
import readline from "readline";

/**
 * Creates an interface that allows the user to interact with the terminal, and allows us to read user input.
 * @type {readline.Interface}
 */
const terminal: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// This will prompt the user to enter a year, so the program knows which year to determine the date of the Matariki public holiday.
terminal.question(
    `${chalk.blue("[program]")} Enter a year: `,
    (year: string): void => {
        if (!parseInt(year)) {
            console.log(
                `${chalk.red("[program]")} Error: Invalid year provided`
            ); // If the year cannot be parsed to a number it won't be considered as a valid year, this is to prevent the program from crashing during fetching
            process.exit(1); // Exits the process
        } else {
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

            console.log(
                `${chalk.blue("[program]")} The pointer date is ${chalk.yellow(
                    parseDate(pointer)
                )}`
            ); // Log the pointer date

            console.log(
                `${chalk.blue("[program]")} The ${chalk.cyan(
                    "Matariki public holiday"
                )} will occur on ${chalk.cyan(parseDate(holiday))}`
            ); // Log the holiday date
        }

        terminal.close(); // Ends the terminal interaction
    }
);

process.on("exit", (code: number): void =>
    console.log(`${chalk.green("[process]")} Exiting process with code ${code}`)
); // process exit listener event which tells us when the process has been exited with what code
