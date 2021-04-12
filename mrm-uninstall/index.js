const { packageJson } = require('mrm-core');
packageJson()
        .removeScript('lint')
        .removeScript('format')
        .unset('lint-staged')
        .save()