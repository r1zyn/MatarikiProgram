import fetch from "node-fetch";
import fs from "fs";
import readline from "readline";
import type { APIResponse } from "./types";
import { EXCESSIVE_TEXT } from "./constants";

const terminal: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

terminal.question("[process] Enter a year: ", (year: string): void => {
    const endpoint: string = `https://ssd.jpl.nasa.gov/api/horizons.api?format=json&COMMAND='301'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='OBSERVER'&CENTER='Geocentric'&START_TIME='${encodeURIComponent(`${year}-Jan-1 00:00:00`)}'&STOP_TIME='${encodeURIComponent(`${year}-Dec-31 23:59:59`)}'&TIME_ZONE='+12:00'`;
    console.log(`[process] Initiated GET request to ${endpoint}`);
    
    if (!parseInt(year)) {
        console.log("[process] Error: Invalid year provided");
        process.exit(1);
    } else {
        fetch(endpoint)
            .then(async (res): Promise<APIResponse> => await res.json())
            .then((res: APIResponse): void => {
                res.result = res.result.replace(EXCESSIVE_TEXT, "");
                fs.writeFileSync("test.txt", res.result.split(" ").toString());
                fs.writeFileSync("output.txt", res.result);
                console.log(`[process] Completed GET request, view the response in ${process.cwd()}\\output.txt (hold ctrl and click on the file text)`);
            })
            .catch((error: Error): void => {
                console.log(`[process] ${error.stack}`);
                process.exit(1);
            });
    }

    terminal.close();
});

process.on("exit", (code: number): void => console.log(`[process] exiting process with code ${code}`));