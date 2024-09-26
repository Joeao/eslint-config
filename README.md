# eslint config

## Setup

Remove existing eslint setups first:

    npm remove @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-config-standard eslint-plugin-prettier prettier eslint-config-standard-react eslint-plugin-react eslint-plugin-react-hooks

Install this (will also install eslint as a dependency);

    npm install @joeao/eslint-config-joe --save-dev

### Javascript

Extend the config in your `.eslintrc.js`

Example:

```
module.exports = {
	'root': true,
	'extends': [
		'@joeao/eslint-config-joe',
	],
};
```

### Typescript

For a Typescript project extend the /typescript config instead:

```
module.exports = {
	'root': true,
	'extends': [
		'@joeao/eslint-config-joe/typescript.mjs',
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
		'@joeao/eslint-config-joe/react.mjs',
	],
};
```
