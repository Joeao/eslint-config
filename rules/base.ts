export default {
	rules: {
		// require trailing commas in multiline object literals
		"comma-dangle": ["error", {
			arrays: "always-multiline",
			objects: "always-multiline",
			imports: "always-multiline",
			exports: "always-multiline",
			functions: "never",
		}],

		// Set if file extensions (.js, .ts) should be there when importing a file.
		// .tsx and .jsx are purposefully omitted because non-React projects should not use these, so attention
		// should be brought to those.
		"import-x/extensions": ["error", "always", {
			"": "never", // https://stackoverflow.com/a/72643821/710630
			"ts": "never",
			"js": "never",
		}],

		// Disable import checking because it doesn't work nicely with TS.
		// TS will complain anyway.
		"import-x/no-unresolved": "off",

		"import-x/order": [
			"error",
			{
				"pathGroups": [
					{
						pattern: "@/**",
						group: "internal",
						position: "after",
					},
				],
				"groups": ["builtin", "external", "internal", "parent", "sibling"],
				"newlines-between": "always",
				"alphabetize": {
					order: "asc", /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
					caseInsensitive: true, /* ignore case. Options: [true, false] */
				},
			},
		],

		// Indent with 4 spaces.
		"indent": [
			"error",
			"tab",
			{
				// Indent switch case:
				SwitchCase: 1,
			},
		],

		"lines-between-class-members": ["warn", "always"],

		// Disable: Non jsdoc multi line comments should be separate single line comments rather than using a block
		// comment.
		"multiline-comment-style": "off",

		"no-path-concat": [
			"off",
		],

		"no-tabs": "off",

		"no-underscore-dangle": "off",

		"quotes": [
			"warn",
			"double",
		],

		"jsdoc/newline-after-description": "off"

	},
};
