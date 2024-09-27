import { config } from "typescript-eslint";

const reactConfig: Partial<typeof config> = {
	rules: {
		// Add tsx and jsx file extensions.
		"import-x/extensions": ["error", "ignorePackages", {
			"": "never", // https://stackoverflow.com/a/72643821/710630
			"ts": "never",
			"tsx": "never",
			"js": "never",
			"jsx": "never",
		}],

		"react/display-name": 0,

		"react/jsx-closing-bracket-location": ["error"],
		"react/jsx-tag-spacing": ["error", { beforeSelfClosing: "proportional-always" }],
		"react/jsx-indent-props": ["error", "tab"],
		"indent": "off",
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-newline": ["error"],

		"react/jsx-first-prop-new-line": ["error"],
		"react/jsx-max-props-per-line": ["error"],
		"react/jsx-curly-brace-presence": ["error", {
			props: "always",
			children: "ignore",
		}],
		"jsx-quotes": ["error"],
		"react/react-in-jsx-scope": 0,
	}
};

export default reactConfig;