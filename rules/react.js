module.exports = {
	rules: {
		// Add tsx and jsx file extensions.
		"import/extensions": ["error", "always", {
			"": "never", // https://stackoverflow.com/a/72643821/710630
			ts: "never",
			tsx: "never",
			js: "never",
			jsx: "never",
		}],

		"react/display-name": 0,

		// Allow space before big arrows
		"@typescript-eslint/type-annotation-spacing": [
			"error",
			{
				before: false,
				after: true,
				overrides: { arrow: { before: true, after: true } },
			},
		],
	},
};
