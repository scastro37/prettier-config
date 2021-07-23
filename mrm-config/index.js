const { packageJson, json, lines } = require('mrm-core');
packageJson()
  .removeScript('prepare')
  .unset('lint-staged')
  .setScript('lint', 'eslint .')
  .setScript('format', 'prettier "**/*.{js,jsx,ts,tsx}" --write')
  .setScript(
    'lint-global',
    'echo "Prettier is running..." && prettier "**/*.{js,jsx,ts,tsx}" --write && echo "ESlint is running..." && eslint .'
  )
  .set('lint-staged', { '*.{js,jsx,ts,tsx}': ['eslint', 'prettier --write'] })
  .save();

json('.vscode/settings.json')
  .merge({
    '[typescript]': {
      'editor.defaultFormatter': 'esbenp.prettier-vscode',
      'editor.formatOnSave': true,
    },
    '[javascript]': {
      'editor.defaultFormatter': 'esbenp.prettier-vscode',
      'editor.formatOnSave': true,
    },
  })
  .save();

const ignore = process.argv.slice(2);
lines('.prettierignore').set(ignore).save();
lines('.eslintignore').set(ignore).save();
