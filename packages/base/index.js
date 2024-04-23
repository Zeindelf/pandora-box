module.exports = {
  env: {
    'browser': true,
    'commonjs': true,
    'es2022': true,
    'jest': true,
    'node': true,
  },
  plugins: [
    'promise',
    'import',
    'import-helpers',
    'prettier',
  ],
  extends: [
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Avoid LF/CRLF on Win/Linux/Mac
    "linebreak-style": "off",
    // Allow use of 'export { default }' from index files
    "no-restricted-exports": "off",
    // Prettier broken new line on Linux CI
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    // Import rules
    "import/no-extraneous-dependencies": "off",
    "import-helpers/order-imports": ["warn", {
      "alphabetize": { "order": "asc", "ignoreCase": true },
      "newlinesBetween": "always",
      "groups": [
        "/^react/",
        "module",
        "/^@[^\/]/",
        "/^@/icons|@/constants/",
        "/^@/",
        "/^@/types/",
        ["parent", "sibling", "index"],
        ["/types/", "/styles/"],
      ]
    }],
  },
  "globals": {
    "jest": true,
  },
};
