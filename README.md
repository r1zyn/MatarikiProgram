# (WIP) Matariki Program (by Team EV)

## About
A program to determine when the Matariki holiday will occur written in TypeScript using the Node.js runtime and the JPL Horizons API.
This program was written for the 2022 Hackathon.

## Installation
[Node.js](https://nodejs.org/) v17 or higher is required. (Note: uses node-fetch v2 due to incompatibility issues with CommonJS and chalk v4.1.2 due to incompatibility issues with ES,)

Install dependencies:

```cmd
npm install 
# or
yarn install
```

If you prefer to use [`yarn`](https://yarnpkg.com/), you can install it with [`npm`](https://npmjs.com/) by running `npm i yarn -g` to install it globally.
If you prefer to use [`npm`](https://npmjs.com/), be sure to delete [`yarn.lock`](yarn.lock).

## Running the program
The script for running the program is defined in the `scripts` property in [`package.json`](./package.json)

```cmd
npm run program
# or
yarn program
```

## How it works
The program will request you enter a valid year (meaning a 4 digit year present or future) and make a `GET` request to the [JPL Horizons API](https://ssd-api.jpl.nasa.gov/doc/horizons.html) using [`node-fetch`](https://npmjs.com/package/node-fetch). The response will then have excessive text omitted and parsed to extract the needed data (it will also be written to [`output.txt`](./output.txt) for readability and program execution transparency). The program will then log a table with the data and display its predictions.

TypeScript files will be compiled to the `build` directory (only generated once `npm run program` or `yarn program` is executed).

## Thesis
According to [https://www.mbie.govt.nz](https://www.mbie.govt.nz/assets/matariki-dates-2022-to-2052-matariki-advisory-group.pdf ), there are a number of common principles and approaches that are universal in identifying the correct time to celebrate the Māori New Year.  

* The beginning of the New Year occurs in mid-winter
* It is marked by the heliacal rising of a star
* It is connected to the lunar months and the lunar phases
* The celebration period lasts for an extended period of time and is not restricted to a single day
* It involves culturally important ceremonies and celebrations

(As quoted in the document)

It is also stated that:

```
Matariki during the lunar month of Pipiri, when the moon is in the Tangaroa period. Tangaroa is not a single phase of the moon but rather a period of the lunar calendar that can be 2, 3 or even 4 days long depending on the regional lunar calendar system that is being followed. The Tangaroa lunar period is situated in the last quarter of the lunar cycle, when the moon is waning. In this period the moon goes from a quarter to completely dark (New Moon).
```

The [**phase angle**](https://en.wikipedia.org/wiki/Phase_angle_(astronomy)), or **Sun-Target-Observer angle**, measures the angle between the Sun, target (in this case the Moon due to Matariki being related to the lunar phases) and Earth. According to the [**phase angle Wikipedia page**](https://en.wikipedia.org/wiki/Phase_angle_(astronomy)), the phase angle ranges from 0 to 180 degrees. This means a new moon happens when the S-T-O climbs to a local maximum (should be just below 180°, while 180° is a solar eclipse), and full moon when it declines to a local minimum (just above 0°, while 0° is a lunar eclipse). Therefore, the third phase of the moon the third quarter) occurs just below 90°. The rule of 19 also states that Matariki will always occur either on or after the 19th of June (and always in either June or July). Using this information, we fetched the S-T-O for every 12 hours from the 19th of June to the 31st of June. Our program finds the closest STO for each date closest (and below) 90° and finds the closest Friday to that date to find the date of the Matariki holiday for the provided year.

## Contributors

* [@r1zyn](https://github.com/r1zyn)
* [@JiachenHH](https://github.com/JiachenHH)
* [@SILentASSassinE](https://github.com/SILentASSassinE)
* [@tommy-duan-macleans](https://github.com/tommy-duan-macleans)

## License
:copyright: 2022 EV. All rights reserved. This project is licensed under the [GPL-3.0 license](./LICENSE).