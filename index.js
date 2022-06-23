module.exports = {
	parser: "@typescript-eslint/parser",

	// airbnb-base has all the ES6 rules without the React stuff
	extends: [
		"eslint-config-airbnb-base",
		"./rules/base.js",
	],

	settings: {
		// .tsx and .jsx are purposefully omitted because non-React projects should not use these, so attention
		// should be brought to those.
		"import/resolver": {
			node: {
				extensions: [".js", ".ts"],
			},
		},
		"import/extensions": [
			".js",
			".ts",
		],
	},

	plugins: [
		"jsdoc",
	],
};
