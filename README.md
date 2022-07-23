# Matariki Program (by Team EV)

## About
This is an open-source program to determine when the Matariki holiday will occur written in TypeScript using the Node.js runtime.
This program was written for the 2022 Hackathon.

## Releases

* [`v1.0.2` (Current release)](https://github.com/r1zyn/MatarikiProgram/releases/tag/v1.0.2)
* [`v1.0.1`](https://github.com/r1zyn/MatarikiProgram/releases/tag/v1.0.1)

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
The program will request you enter a valid year (has to be able to be converted to a number) and will in result output its predictions of when the Matariki holiday for the given year will be.

TypeScript files will be compiled to the `build` directory (only generated once `npm run program` or `yarn program` is executed).

## Method
To see the original method, view the [`archived`](https://github.com/r1zyn/MatarikiProgram/tree/archived) branch.

The current method is yet to be added.

## Contributing
See the [contributing guide](.github/CONTRIBUTING.md).

## Todo

* Complete project

## Contributors

* [@r1zyn](https://github.com/r1zyn)
* [@JiachenHH](https://github.com/JiachenHH)
* [@SILentASSassinE](https://github.com/SILentASSassinE)
* [@tommy-duan-macleans](https://github.com/tommy-duan-macleans)

## Import links

* [License](./LICENSE)
* [Codeowners](.github/CODEOWNERS)
* [Code Of Conduct](.github/CODE_OF_CONDUCT.md)
* [Security Policy](.github/SECURITY.md)
* [Contributing Guide](.github/CONTRIBUTING.md)
* [Issues](https://github.com/r1zyn/MatarikiProgram/issues)
* [Pull Requests](https://github.com/r1zyn/MatarikiProgram/pulls)
* [Discussions](https://github.com/r1zyn/MatarikiProgram/discussions)

## License
:copyright: 2022 EV. All rights reserved. This project is licensed under the [GPL-3.0 license](./LICENSE).