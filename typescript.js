module.exports = {
	parser: "@typescript-eslint/parser",

	extends: [
		"plugin:@typescript-eslint/recommended",
		"@antriver/eslint-config-antriver/typescript.js",
		"./index.js",
		"./rules/typescript.js",
	],

	plugins: [
		"@typescript-eslint",
	],
};
