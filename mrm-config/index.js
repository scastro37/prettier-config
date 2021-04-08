const { packageJson } = require("mrm-core");

packageJson()
        .removeScript('prepare')
        .setScript('lint', 'eslint . --fix')
        .setScript('format', 'prettier . --write')
        .save()