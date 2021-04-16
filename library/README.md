This module defines standard Prettier rules for code formatting to help format the code in all of our projects.

See the official Prettier documentation [here](https://prettier.io).

## Compatibility

- npm v7 or higher.

## How to use it
To use the library you just need to follow these steps:

- Install the library with npm
```js
npm i @condor-labs/prettier-config
```
- Create the config file `.prettierrc` and import the library:
```js
├── Example Proyect
    ├── node_modules
    ├── src
    ├── package-lock.json
    ├── package.json
    └── .prettierrc
```
```js
"@condor-labs/prettier-config";
```
- And download the [VSCode prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Rules contained in this library. [more information](https://prettier.io/docs/en/options.html).
```js
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  requirePragma: false,
  insertPragma: false,
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf",
};
```

## Contributors

The original authors and current lead maintainers of this module is the [@condor-labs development team](https://condorlabs.io/team).

**More about Condor Labs [Here](https://condorlabs.io/about).**

## License

[MIT](LICENSE)
