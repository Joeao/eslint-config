module.exports = {
	parser: "@typescript-eslint/parser",

	// airbnb-base has all the ES6 rules without the React stuff
	extends: [
		"eslint-config-airbnb-base",
		"./rules/base.js"
	],

	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ",jsx", ".ts", ".tsx"]
			}
		},
		"import/extensions": [
			".js",
			".jsx",
			".ts",
			".tsx"
		]
	}
};
