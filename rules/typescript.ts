import { config } from "typescript-eslint";

const typescriptConfig: Partial<typeof config> = {	rules: {
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
		"no-nested-ternary": 0,
		"import-x/no-dynamic-require": "off",
		"import-x/no-extraneous-dependencies": ["error", {
				devDependencies: true,
			}],		"@typescript-eslint/member-delimiter-style": ["error"],
		"@typescript-eslint/explicit-function-return-type": [
			"error",
			{
				allowExpressions: true,
			},
		],
	},
};

export default typescriptConfig;