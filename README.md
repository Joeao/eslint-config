# eslint config

## Setup

Remove existing eslint setups first:

	npm remove @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-config-standard eslint-plugin-prettier prettier

Install this (will also install eslint as a dependency);

    npm install @smda/eslint-config-smda --save-dev

### Javascript

Extend the config in your `.eslintrc.js`

Example:

```
module.exports = {
	'root': true,
	'extends': [
		'@smda/eslint-config-smda',
	],
};
```

### Typescript

For a Typescript project extend the /typescript config instead:

```
module.exports = {
	'root': true,
	'extends': [
		'@smda/eslint-config-smda/typescript.js',
	],
};
```

### React

For a React project you need to install some additional plugins:

	npm install eslint-plugin-react eslint-plugin-react-hooks --save-dev

Then extend the /react config instead:

```
module.exports = {
	'root': true,
	'extends': [
		'@smda/eslint-config-smda/react.js',
	],
};
```
