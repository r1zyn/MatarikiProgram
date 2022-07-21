import type { APIResponse, Data, TableOptions, TableRow } from "./types";
import chalk from "chalk";
import chalkTable from "chalk-table";
import closestFriday from "./utils/closestFriday";
import fs from "fs";
import fetch, { Response } from "node-fetch";
import getDateSuffix from "./utils/getDateSuffix";
import getDay from "./utils/getDay";
import getMonth from "./utils/getMonth";
import readline from "readline";
import { COLUMN_INFO, TIME } from "./constants";

/**
 * Creates an interface that allows the user to interact with the terminal, and allows us to read user input.
 * @type {readline.Interface}
 */
const terminal: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Options for the table which will contain the data from the API.
 * @type {TableOptions}
 */
const options: TableOptions = {
    leftPad: 0, // How many spaces to pad the left side of the table
    columns: [
        { field: "id", name: chalk.cyan("🆔 ID") }, // The ID column
        { field: "date", name: chalk.blueBright("📅 Date (UTC+12, NZST)") }, // The date column
        { field: "time", name: chalk.greenBright("⏰ Time (UTC+12, NZST)") }, // The time column
        { field: "sto", name: chalk.yellow("🌙 S-T-O (Sun-Target-Observer) Angle") } // The S-T-O column
    ]
};

// This will prompt the user to enter a year, so the program knows which year to determine the date of the Matariki public holiday.
terminal.question("[process] Enter a year: ", (year: string): void => {
    /**
     * The Horizons API endpoint to fetch the data from, with the necessary parameters to fetch the data we need.
     * @type {string}
     */
    const endpoint: string = `https://ssd.jpl.nasa.gov/api/horizons.api?format=json&COMMAND='301'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='OBSERVER'&CENTER='Geocentric'&START_TIME='${encodeURIComponent(`${year}-Jun-19 ${TIME}`)}'&STOP_TIME='${encodeURIComponent(`${year}-Jul-31 ${TIME}`)}'&TIME_ZONE='+12:00'&STEP_SIZE='1d'&QUANTITIES='24'`;
    console.log(`[process] Initiated GET request to ${endpoint}`); // Inform the user of the endpoint they are requesting and that fetching as begun

    if (!parseInt(year)) {
        console.log("[process] Error: Invalid year provided"); // If the year cannot be parsed to a number it won't be considered as a valid year, this is to prevent the program from crashing during fetching
        process.exit(1); // Exits the process
    } else {
        fetch(endpoint) // Fetches the endpoint (makes the GET request)
            .then(async (res: Response): Promise<APIResponse> => await res.json()) // Converts the data into a JSON object we can use
            .then((res: APIResponse): void => {
                /**
                 * The stringified JSON data from the API.
                 * @type {string[]}
                 */
                const results: string[] = res.result // The result property from the received JSON object
                    .replaceAll(COLUMN_INFO, "") // removes unecessary text
                    .slice(3767) // Also removes uncessary text
                    .replaceAll(` ${TIME}`, "") // Removes the time so it makes it easier for us to organise the dates and S-T-Os
                    .replaceAll(/\s{2,}/g, " ") // Removes extra spaces and keeps single whitespaces also for easy organisation
                    .split(" ") // Turn the string into an array we can use to organise the data
                    .filter((v: string): boolean => v !== ""); // Removes the empty string element at the start of the array

                /**
                 * An array of the dates.
                 * @type {string[]}
                 */
                const dates: string[] = results.filter((_v: string, i: number): boolean => i % 2 === 0); // The dates are the even elements in the array, so we filter the array for elements with even indexes

                /**
                 * An array of the S-T-Os.
                 * @type {string[]}
                 */
                const stos: string[] = results.filter((_v: string, i: number): boolean => i % 2 !== 0); // Vice versa for the S-T-Os, where they have odd indexes

                /**
                 * Array of objects containing the dates and their corresponding S-T-Os.
                 * @type {Data[]}
                 */
                const data: Data[] = dates.map((date: string, i: number): Data => { // Here we simply map the dates array and use the index paremeter in the map method to index the corresponding S-T-Os
                    return {
                        date,
                        sto: stos[i]
                    };
                });

                console.log(`[process] Completed GET request, here are the results:\n`);
                console.log("==============================================[ Data ]==============================================");

                /**
                 * The table which will contain the data from the API.
                 * @type {any}
                 */
                const table = chalkTable(options, data.map((d: Data, id: number): TableRow => { // The program maps the objects from the data array to create the rows for the table
                    const date: Date = new Date(Date.parse(d.date)); // Create a new date object from the date string
                    return {
                        id,
                        date: `${getDay(date.getDay())} ${date.getDate()}${getDateSuffix(date.getDate())} ${getMonth(date.getMonth())} ${date.getFullYear()}`,
                        time: `${TIME} am`,
                        sto: `${d.sto}°`
                    }; // Returning the row data
                }));

                console.log(table); // Logging the table

                /**
                 * The date with the closest S-T-O to 90 degrees.
                 * @type {string}
                 */
                const closestDate: string = stos
                    .filter((sto: string): boolean => parseFloat(sto) < 90) // Only keep S-T-Os that are less than 90 degrees
                    .reduce((a: string, b: string): string => (Math.abs(parseFloat(b) - 90) < Math.abs(parseFloat(a) - 90) ? b : a)); // Find the closest S-T-O to 90 degrees

                /**
                 * The corresponding Data object for the closest date so we can access the corresponding S-T-O as well.
                 * @type {Data}
                 */
                const closest: Data = data.find((d: Data): boolean => d.sto === closestDate)!; // Searches the data array for the object with the matching date

                /**
                 * Convert the date into a usable date object.
                 * @type {Date}
                 */
                const date: Date = new Date(Date.parse(closest.date)); // Uses the Date.parse() method to parse the date string

                console.log("\n=============================================[ Results ]=============================================");
                console.log(`The closest S-T-O is ${closest.sto}°, which occurs on ${getDay(date.getDay())} ${date.getDate()}${getDateSuffix(date.getDate())} ${getMonth(date.getMonth())} ${date.getFullYear()}`); // Logs the date with the closest S-T-O to 90 degrees
                
                /**
                 * The closest Friday to the date with the closest S-T-O
                 * (the actual holiday)
                 * @type {Date}
                 */
                const holiday: Date = closestFriday(date);

                console.log(`This means the Matariki public holiday will occur on ${getDay(holiday.getDay())} ${holiday.getDate()}${getDateSuffix(holiday.getDate())} ${getMonth(holiday.getMonth())} ${holiday.getFullYear()}`); // Logs the holiday date

                fs.writeFileSync("output.txt", results.join("\n")); // Writes the raw data to a text file
                console.log(`You can view the raw data in ${process.cwd()}\\output.txt (hold ctrl and click on the file text)`);
                console.log("\n");
            })
            .catch((error: Error): void => {
                console.log(`[process] ${error.stack}`); // Error handling
                process.exit(1); // Exits the process
            });
    }

    terminal.close(); // Ends the terminal interaction
});

process.on("exit", (code: number): void => console.log(`[process] exiting process with code ${code}`)); // process exit listener event which tells us when the process has been exited with what code