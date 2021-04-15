This module provides useful help to configure Prettier rules in the project

See official documentation [here](https://prettier.io).

## Compatibility

- npm v7 or higher.

## How to use it
To use the library you just need to follow the following steps:

- Install the library with npm
```js
npm i @scastro37/prettier-config
```
- Create the file config # .prettierrc and import the library:
```js
"@scastro37/prettier-config";
```
- And download [prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) in vscode.

### Rules contained in this library [more information](https://prettier.io/docs/en/options.html).
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

The original author and current lead maintainer of this module is the [@condor-labs development team](https://condorlabs.io/team).

**More about Condorlabs [Here](https://condorlabs.io/about).**

## License

[MIT](LICENSE)
