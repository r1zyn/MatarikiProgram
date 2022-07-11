import fetch from "node-fetch";
import type { APIResponse } from "./types";
import { EXCESSIVE_TEXT, ENDPOINT } from "./constants";
import { writeFileSync } from "fs";

fetch(ENDPOINT)
    .then(async (res): Promise<APIResponse> => await res.json())
    .then((res: APIResponse): void => {
        res.result = res.result.replace(EXCESSIVE_TEXT, "");
        writeFileSync("output.txt", res.result);
        console.log(res.result);
    })