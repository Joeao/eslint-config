module.exports = {
	parser: "@typescript-eslint/parser",

	extends: [
		// Base
		"./index.js",

		// Typescript
		"plugin:@typescript-eslint/recommended",
		"./rules/typescript.js"
	],

	plugins: [
		"@typescript-eslint"
	]
};
