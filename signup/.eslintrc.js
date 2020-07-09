module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["eslint:recommended", "airbnb"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "comma-dangle": ["error", "only-multiline"],
    "object-curly-newline": ["error", { multiline: true }],
    "import/no-absolute-path": [false],
    "import/extensions": [false],
    "import/no-unresolved": [false],
  },
};
