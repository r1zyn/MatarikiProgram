import fetch from "node-fetch";
import { writeFileSync } from "fs";
import { EXCESSIVE_TEXT } from "./constants";

type APIResponse = {
    result: string;
};

fetch(`https://ssd.jpl.nasa.gov/api/horizons.api?format=json&COMMAND='301'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='OBSERVER'&CENTER='Geocentric'`)
    .then(async (res): Promise<APIResponse> => await res.json())
    .then((res: APIResponse): void => {
        res.result = res.result.replace(EXCESSIVE_TEXT, "");
        writeFileSync("output.txt", res.result)
        console.log(res.result)
    })