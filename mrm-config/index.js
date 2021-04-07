module.exports = () =>{
    const pkg = packageJson();

    pkg
        .setScript('lint', 'eslint . --fix')
        .setScript('format', 'prettier . --write')
        .save()
};