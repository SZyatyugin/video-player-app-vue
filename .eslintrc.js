module.exports = {
    "plugins":["vue","prettier",],
    "root": true,
    "env": {
        "node": true,
    },
    "parser":"vue-eslint-parser",
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential", 
        "prettier",
        "prettier/vue",
    ],
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": false,
        },
    },
    settings: {
        "prettier-vue": {
            // Settings for how to process Vue SFC Blocks
            "SFCBlocks": {
                /**
         * Use prettier to process `<template>` blocks or not
         *
         * If set to `false`, remember not to `extends: ['prettier/vue']`, as you need the rules from `eslint-plugin-vue` to lint `<template>` blocks
         *
         * @default true
         */
                "template": false,
 
                /**
         * Use prettier to process `<script>` blocks or not
         *
         * @default true
         */
                "script": true,
 
                /**
         * Use prettier to process `<style>` blocks or not
         *
         * @default true
         */
                "style": true,
 
                // Settings for how to process custom blocks
                "customBlocks": {
                    // Treat the `<docs>` block as a `.markdown` file
                    "docs": { "lang": "markdown", },
 
                    // Treat the `<config>` block as a `.json` file
                    "config": { "lang": "json", },
 
                    // Treat the `<module>` block as a `.js` file
                    "module": { "lang": "js", },
 
                    // Ignore `<comments>` block (omit it or set it to `false` to ignore the block)
                    "comments": false,
 
                    // Other custom blocks that are not listed here will be ignored
                },
            },
 
            // Use prettierrc for prettier options or not (default: `true`)
            "usePrettierrc": true,
 
            // Set the options for `prettier.getFileInfo`.
            // @see https://prettier.io/docs/en/api.html#prettiergetfileinfofilepath-options
            "fileInfoOptions": {
                // Path to ignore file (default: `'.prettierignore'`)
                // Notice that the ignore file is only used for this plugin
                "ignorePath": ".testignore",
 
                // Process the files in `node_modules` or not (default: `false`)
                "withNodeModules": false,
            },
        },
    },
    "rules": {
        // enable additional rules
        "indent": ["error", 4,],
        "linebreak-style": ["error", "unix",],
        "quotes": ["error", "double",],
        "semi": ["error", "always",],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always",],
        "no-cond-assign": ["error", "always",],

        // disable rules from base configurations
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
};
