#!/usr/bin/env bash
if [[ -z "$1" ]]; then
  echo "ERROR!!!!!";
  echo "Please define if it is type 'JS' or 'TS'";
else
  if [ $1 == 'js' ] || [ $1 == 'JS']; then
    TYPE='"@scastro37/eslint-config/configJS"';
  elif [ $1 == "ts" ] || [ $1 == "TS" ]; then
    TYPE='"@scastro37/eslint-config/configTS"'; fi

  if [ -f .eslintrc.js ];then rm .eslintrc.js;fi
  if [ -f .eslintrc.json ];then rm .eslintrc.json;fi
  if [ -f .eslintrc ];then rm .eslintrc;fi
  if [ -f .estint.config.js ];then rm .estint.config.js;fi
  if [ -f .estint.config.json ];then rm .estint.config.json;fi

  if [ -f .prettierrc.js ];then rm .prettierrc.js;fi
  if [ -f .prettierrc.json ];then rm .prettierrc.json;fi
  if [ -f .prettierrc ];then rm .prettierrc;fi
  if [ -f .prettier.config.js ];then rm .prettier.config.js;fi
  if [ -f .prettier.config.json ];then rm .prettier.config.json;fi
  npm i eslint@7.23.0 @scastro37/eslint-config -D
  ESLINT="module.exports = {extends: [${TYPE}]};"
  PRETTIER='"@scastro37/prettier-config"'
  SETTINGS='{
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    }
  }'
  printf "${PRETTIER} %s\n" > .prettierrc
  printf "${ESLINT} %s\n" > .eslintrc.js
  #Config setting.json
  if [ -d .vscode ]; then 
    if [ -f .vscode/settings.json ]; then
      printf "${SETTINGS} %s\n" >> .vscode/settings.json; 
    else printf "${SETTINGS} %s\n" > .vscode/settings.json; fi;
  else 
    mkdir .vscode
    printf "${SETTINGS} %s\n" > .vscode/settings.json;
  fi;
  
  npx mrm lint-staged
  node ./node_modules/@scastro37/prettier-config/mrm-config
fi
