module.exports = {
	extends: [
		// Our default Typescript config.
		"./typescript.js",

		// React recommended rules.
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",

		// Custom React rules.
		"./rules/react.js",
	],

	settings: {
		react: {
			version: "detect",
		},
	},

	plugins: [
		"react",
		"react-hooks",
	],
};
