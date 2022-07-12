# Matariki Program

## About
A program to determine when Matariki will occur written in TypeScript using the Node.js runtime.

## Installation
[Node.js](https://nodejs.org/) v17 or higher is required. (Note: uses node-fetch v2 due to incompatibility issues with CommonJS)

Install dependencies:

```cmd
npm install 
or
yarn install
```

## Running the program
The script for running the program is defined in the `scripts` property in [`package.json`](./package.json)

```cmd
npm run program
or
yarn program
```

## How it works
The program will make a `GET` request to the [JPL Horizons API](https://ssd-api.jpl.nasa.gov/doc/horizons.html) using [`node-fetch`](https://npmjs.com/package/node-fetch). The response will then be written to [`output.txt`](./output.txt) after omitting unnecessary text in the response.
TypeScript files will be compiled to the `build` directory (only generated once `npm run program` or `yarn program` is executed).

## License
:copyright: 2022 EV. All rights reserved. This project is licensed under the [GPL-3.0 license](./LICENSE).