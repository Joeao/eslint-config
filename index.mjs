import jsdoc from "eslint-plugin-jsdoc";
import tsParser from "@typescript-eslint/parser";
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

export default [
    {
        plugins: {
            jsdoc,
        },

        languageOptions: {
            parser: tsParser,
        },

        settings: {
            "import-x/resolver": {
                node: {
                    extensions: [".js", ".ts"],
                },
            },

            "import-x/extensions": [".js", ".ts"],
        },
    },
];