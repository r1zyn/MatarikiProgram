import fetch from "node-fetch";
import type { APIResponse } from "./types";
import { EXCESSIVE_TEXT, ENDPOINT } from "./constants";
import { writeFileSync } from "fs";

fetch(ENDPOINT)
    .then(async (res): Promise<APIResponse> => await res.json())
    .then((res: APIResponse): void => {
        res.result = res.result.replace(EXCESSIVE_TEXT, "");
        writeFileSync("output.txt", res.result);
        console.log(`[process] Completed GET request, view the response in ${process.cwd()}\\output.txt (hold ctrl and click on the file text)`);
    })
    .catch((error: Error): void => {
        console.log(`[process] ${error.stack}`);
        process.exit(1);
    });

process.on("exit", (code: number): void => console.log(`[process] exiting process with code ${code}`));