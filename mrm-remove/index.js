const { json } = require('mrm-core');

const packages = process.argv.slice(2);
packages.forEach(path=>{
    json(path).unset('eslintConfig').unset('prettier').save();
})