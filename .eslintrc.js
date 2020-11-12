module.exports = {
  "plugins":["vue","prettier"],
  "root": true,
  "env": {
    "node": true
  },
  "parser":"vue-eslint-parser",
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential", 
    "prettier",
    "prettier/vue"
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": false
    }
  },
  "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
