const { packageJson } = require("mrm-core");

module.exports = function task() {
    const pkg = packageJson();

    pkg
        .setScript('lint', 'eslint . --fix')
        .setScript('format', 'prettier . --write')
        .save()
};