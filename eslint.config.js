// eslint.config.mjs
import { configs as wdioConfig } from "eslint-plugin-wdio";

export default [
    {
        extends: [
            wdioConfig['flat/recommended'],
            // ...
        ]
    }
];