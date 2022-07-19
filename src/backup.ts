import type { APIResponse, Data, TableOptions, TableRow } from "./types";
import chalk from "chalk";
import chalkTable from "chalk-table";
import fetch, { Response } from "node-fetch";
// import fs from "fs";
import getDateSuffix from "./utils/getDateSuffix";
import getDay from "./utils/getDay";
import getMonth from "./utils/getMonth";
import readline from "readline";

const terminal: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const options: TableOptions = {
    leftPad: 0,
    columns: [
        { field: "id", name: chalk.cyan("🆔 ID") },
        { field: "date", name: chalk.blueBright("📅 Date (UTC +12, NZST)") },
        { field: "time", name: chalk.greenBright("⏰ Time (UTC +12, NZST)") },
        { field: "sto", name: chalk.yellow("🌙 S-T-O (Sun-Target-Observer) Angle") }
    ]
};

terminal.question("[process] Enter a year: ", (year: string): void => {
    const endpoint: string = `https://ssd.jpl.nasa.gov/api/horizons.api?format=json&COMMAND='301'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='OBSERVER'&CENTER='Geocentric'&START_TIME='${encodeURIComponent(`${year}-Jun-19 00:00:00`)}'&STOP_TIME='${encodeURIComponent(`${year}-Jul-31 23:59:59`)}'&TIME_ZONE='+12:00'&STEP_SIZE='6h'`;
    console.log(`[process] Initiated GET request to ${endpoint}`);

    if (!parseInt(year)) {
        console.log("[process] Error: Invalid year provided");
        process.exit(1);
    } else {
        fetch(endpoint)
            .then(async (res: Response): Promise<APIResponse> => await res.json())
            .then((res: APIResponse): void => {
                const result: string = res.result
                    .slice(6500, 171446)
                    .replaceAll(/\s{2,}/g, " ");

                const dates: string[] = [ ...result.matchAll(/(\d{4}\-[A-Z][a-z]{2}\-\d{2}\s\d{2}\:\d{2})/g) ]
                    .map((m: RegExpMatchArray): string => m[0]);

                const stos: string[] = [];
                let num: number = 1;
                
                for (let i: number = 0; i < dates.length; i++) {
                    switch (num) {
                        case 1: {
                            stos.push(result.split(" ")[result.split(" ").indexOf(dates[i].replace(/(\s\d{2}\:\d{2})/g, "")) + 51]);
                            num = 2;
                            break;
                        }

                        case 2: {
                            stos.push(result.split(" ")[result.split(" ").indexOf(dates[i].replace(/(\s\d{2}\:\d{2})/g, "")) + 51 + 99]);
                            num = 3;
                            break;
                        }

                        case 3: {
                            stos.push(result.split(" ")[result.split(" ").indexOf(dates[i].replace(/(\s\d{2}\:\d{2})/g, "")) + 51 + 99 + 99]);
                            num = 1;
                            break;
                        }
                    }
                    // 156 for one sto, 360 for a full line, 46 lines in total
                }

                const data: Data[] = [];
                dates.forEach((date: string, i: number): number => data.push({ date, sto: stos[i] }));

                console.log(`[process] Completed GET request, here are the results:\n`);
                console.log("==============================================[ Data ]==============================================");

                const table = chalkTable(options, data.map((d: Data, id: number): TableRow => {
                    const date: Date = new Date(Date.parse(d.date));
                    return {
                        id,
                        date: `${getDay(date.getDay())} ${date.getDate()}${getDateSuffix(date.getDate())} ${getMonth(date.getMonth())} ${date.getFullYear()}`,
                        time: date.toLocaleTimeString(),
                        sto: `${d.sto}°`
                    };
                }));

                console.log(table);

                const closest: Data = data.find((d: Data): boolean => d.sto === stos.reduce((a: string, b: string): string => (Math.abs(parseFloat(b) - 90) < Math.abs(parseFloat(a) - 90) ? b : a)))!;
                const date: Date = new Date(Date.parse(closest.date));
                console.log("\n=============================================[ Results ]=============================================");
                console.log(`The closest S-T-O is ${closest.sto}°, which occurs on ${getDay(date.getDay())} ${date.getDate()}${getDateSuffix(date.getDate())} ${getMonth(date.getMonth())} ${date.getFullYear()} at ${date.toLocaleTimeString()}`);
                console.log(`This means the Matariki public holiday will occur on:`);
                console.log("\n".repeat(2));

                // fs.writeFileSync("output.txt", data.map((d: Data): string => `${d.date} ${d.sto}`).join("\n"));
                // console.log(`[process] Completed GET request, view the response in ${process.cwd()}\\output.txt (hold ctrl and click on the file text)`);
            })
            .catch((error: Error): void => {
                console.log(`[process] ${error.stack}`);
                process.exit(1);
            });
    }

    terminal.close();
});

process.on("exit", (code: number): void => console.log(`[process] exiting process with code ${code}`));