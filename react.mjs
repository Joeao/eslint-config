import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "./typescript.js",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "./rules/react.js",
)), {
    plugins: {
        react: fixupPluginRules(react),
        "react-hooks": fixupPluginRules(reactHooks),
    },

    settings: {
        "import-x/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },

        "import-x/extensions": [".js", ".jsx", ".ts", ".tsx"],

        react: {
            version: "detect",
        },
    },
}];