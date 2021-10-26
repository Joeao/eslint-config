# eslint config

## Install

    npm install @smda/eslint-config-smda --save-dev

## Usage

Extend the config in your `.eslintrc`

Example .eslintrc:

    {
        "root": true,
        "extends": [
            "@smda/eslint-config-smda",
        ]
    }

### Webpack

If you are using Webpack, install:

    npm install eslint-import-resolver-webpack --save-dev

Add add this to your eslint config:

    "settings": {
        // Use aliases from Webpack config.
        "import/resolver": {
            // "node" is here to fix a problem with built-in packages being marked as unresolved
            // https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-511007063
            "node": {},
            "webpack": {
                "config": "./webpack.config.js"
            }
        }
    },

### Typescript

If you are using Typescript also extend this::

    {
        "extends": [
			"@smda/eslint-config-smda",
            "@smda/eslint-config-smda/typescript",
        ]
    }
