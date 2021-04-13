const { packageJson, json } = require('mrm-core');

packageJson().removeScript('lint').removeScript('format').unset('lint-staged').save();

json('.vscode/settings.json').unset('[javascript]').unset('[typescript]').save();
