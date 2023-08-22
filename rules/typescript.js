module.exports = {
	rules: {
		"@typescript-eslint/no-empty-function": ["warn", { allow: ["arrowFunctions"] }],
		// Fix no-unused vars - use typescript's version.
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "warn",
		"camelcase": 0,
		"@typescript-eslint/consistent-type-imports": "error",
		"semi": "off",
		"@typescript-eslint/semi": ["error"],
		"@typescript-eslint/type-annotation-spacing": [
			"error",
			{
				before: false,
				after: true,
				overrides: { arrow: { before: true, after: true } },
			},
		],
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
	},
};
