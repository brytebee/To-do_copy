mkdir .github && touch .gitignore
echo -e "node_modules/" >> .gitignore
cd .github
mkdir workflows
cd workflows
touch linters.yml && echo -e "
name: Linters

on: pull_request

env:
  FORCE_COLOR: 1

jobs:
  lighthouse:
    name: Lighthouse
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: "12.x"
      - name: Setup Lighthouse
        run: npm install -g @lhci/cli@0.7.x
      - name: Lighthouse Report
        run: lhci autorun --upload.target=temporary-public-storage --collect.staticDistDir=.
  webhint:
    name: Webhint
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: "12.x"
      - name: Setup Webhint
        run: |
          npm install --save-dev hint@6.x
          [ -f .hintrc ] || wget https://raw.githubusercontent.com/microverseinc/linters-config/master/html-css-js/.hintrc
      - name: Webhint Report
        run: npx hint .
  stylelint:
    name: Stylelint
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: "12.x"
      - name: Setup Stylelint
        run: |
          npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
          [ -f .stylelintrc.json ] || wget https://raw.githubusercontent.com/microverseinc/linters-config/master/html-css-js/.stylelintrc.json
      - name: Stylelint Report
        run: npx stylelint "**/*.{css,scss}"
  eslint:
    name: ESLint
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: "12.x"
      - name: Setup ESLint
        run: |
          npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
          [ -f .eslintrc.json ] || wget https://raw.githubusercontent.com/microverseinc/linters-config/master/html-css-js/.eslintrc.json
      - name: ESLint Report
        run: npx eslint ." >> linters.yml
cd ../..
touch .hintrc && echo -e '{
  "connector": {
    "name": "local",
    "options": {
      "pattern": ["**", "!.git/**", "!node_modules/**"]
    }
  },
  "extends": ["development"],
  "formatters": ["stylish"],
  "hints": [
    "button-type",
    "disown-opener",
    "html-checker",
    "meta-charset-utf-8",
    "meta-viewport",
    "no-inline-styles:error"
  ]
}' >> .hintrc
touch .stylelintrc.json && echo -e '{
  "extends": ["stylelint-config-standard"],
  "plugins": ["stylelint-scss", "stylelint-csstree-validator"],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "csstree/validator": true
  },
  "ignoreFiles": ["build/**", "dist/**", "**/reset*.css", "**/bootstrap*.css", "**/*.js", "**/*.jsx"]
}' >> .stylelintrc.json
touch .eslintrc.json && echo -e '{
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "extends": ["airbnb-base"],
  "rules": {
    "no-shadow": "off",
    "no-param-reassign": "off",
    "eol-last": "off",
    "import/extensions": [ 1, {
      "js": "always", "json": "always"
    }]
  },
  "ignorePatterns": [
    "dist/",
    "build/"
  ]
}' >> .eslintrc.json
# echo "Installing Webhint"
# npm install --save-dev hint@6.x
# echo "Installing Stylelint"
# npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
# echo "Installing ESLint"
# npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x