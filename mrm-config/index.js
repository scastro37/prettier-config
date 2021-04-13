const { packageJson, json } = require('mrm-core');
packageJson()
  .removeScript('prepare')
  .unset('lint-staged')
  .setScript('lint', 'eslint --fix')
  .setScript('format', 'prettier --write')
  .set('lint-staged', { '*.{js,jsx,ts,tsx}': ['npm run lint', 'npm run format'] })
  .save();

json('.vscode/settings.json')
  .merge({
        "[typescript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode",
          "editor.formatOnSave": true
        },
        "[javascript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode",
          "editor.formatOnSave": true
        }
      })
  .save();
