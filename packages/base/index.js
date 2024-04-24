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
    'plugin:node/recommended',
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
    'max-len': ['error', { code: 120 }],
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
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'comma-dangle': ['error', 'never'],
        'max-lines': 'off',
        'quote-props': ['error', 'always'],
        'quotes': ['error', 'double'],
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            order: [
              'name',
              'version',
              'description',
              'keywords',
              'license',
              'repository',
              'funding',
              'author',
              'type',
              'exports',
              'main',
              'files',
              'module',
              'unpkg',
              'bin',
              'scripts',
              'dependencies',
              'devDependencies',
              'peerDependencies',
              'peerDependenciesMeta',
              'eslintConfig',
              'lint-staged',
              'husky',
            ],
            pathPattern: '^$',
          },
          {
            order: { type: 'asc' },
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
          },
        ],
      },
    },
  ],
  "globals": {
    "jest": true,
  },
};
