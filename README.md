# Matariki Program (by Team EV)

## About
This is an open-source program to determine when the Matariki holiday will occur written in TypeScript using the Node.js runtime.
This program was written for the 2022 Hackathon.

## Releases

* [`v1.0.5 (Current release)`](https://github.com/r1zyn/MatarikiProgram/releases/tag/v1.0.5)
* [`v1.0.4`](https://github.com/r1zyn/MatarikiProgram/releases/tag/v1.0.4)
* [`v1.0.3`](https://github.com/r1zyn/MatarikiProgram/releases/tag/v1.0.3)
* [`v1.0.2`](https://github.com/r1zyn/MatarikiProgram/releases/tag/v1.0.2)
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
npm start
# or
yarn start
```

Example:
![image](https://user-images.githubusercontent.com/72182515/180643996-deeb54fc-20aa-48b6-9977-4ccfa05cef6b.png)

## Testing
This program uses [`jest`](https://jestjs.io/) for program testing. To run tests, run `yarn test` or `npm test`. For coverage, run `yarn test:coverage` or `npm test:coverage`.
To view the Icov reports, you can open [`index.html`](./coverage/lcov-report/index.html) in a browser (VSC Live Server extension recommended)
You should see something like this:
![image](https://user-images.githubusercontent.com/72182515/180643942-11d6d3d7-ab6a-420e-ab43-dcdde7dee812.png)

## How it works
The program will request you enter a valid year (has to be able to be converted to a number) and will in result output its predictions of when the Matariki holiday for the given year will be.

TypeScript files will be compiled to the `build` directory (only generated once `npm start` or `yarn start` is executed).

## Method
To see the original method, view the [`archived`](https://github.com/r1zyn/MatarikiProgram/tree/archived) branch.

It is known that the Tangaroa period occurs 22 days after the new moon in May-June. Moreover, the Chinese Lunar calendar is also determined by the moon’s lunar cycle, where the first of the month is the beginning of the new moon. The Chinese lunar month in the Gregorian May-June-July period is May (五月). Therefore, the Tangaroa period begins on the 23rd of May in the Chinese lunar calendar as it is 22 days after the beginning of May. We can convert the lunar date of May 23rd into the Gregorian date, and we can determine the Matariki holiday using this date, by getting the closest Friday.

If the date we use to determine the Matariki holiday is on a weekend, the holiday will be on the previous Friday. Otherwise, the holiday will occur on the next Friday.
Since the Georgian calendar is a solar calendar, we can always predict the Matariki cluster becomes visible at dawn on and after 19 June every year.

## Contributing
See the [contributing guide](.github/CONTRIBUTING.md).

## Todo

* Nothing to do.

## Contributors

* [@r1zyn](https://github.com/r1zyn) - getMatariki and parseDate functions, commenting
* [@JiachenHH](https://github.com/JiachenHH) - Date utility functions
* [@SILentASSassinE](https://github.com/SILentASSassinE) - Method concept, testing (Jest and manual)
* [@tommy-duan-macleans](https://github.com/tommy-duan-macleans) - index and types files

Note: due to 3 members unfamiliar with `git`, all members contributed via the [`Live Share extension`](https://code.visualstudio.com/learn/collaboration/live-share) for Visual Studio Code, and one member then pushed commits to the repository.

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
