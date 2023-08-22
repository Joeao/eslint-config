module.exports = {
	parser: "@typescript-eslint/parser",

	extends: [
		// Base
		"./index.js",

		// Typescript
		"plugin:@typescript-eslint/recommended",
		"@antriver/eslint-config-antriver/typescript.js",
		"./rules/typescript.js",
	],

	plugins: [
		"@typescript-eslint",
	],
};
