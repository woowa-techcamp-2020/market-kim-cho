module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: ["eslint:recommended", "airbnb"],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    quotes: ["error", "double", { allowTemplateLiterals: true }],
  },
};
