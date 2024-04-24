module.exports = {
  extends: ['@pandora-box/base'],
  overrides: [
    {
      extends: [
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript"
      ],
      files: ['**/*.{ts,tsx}'],
      "plugins": [
        "@typescript-eslint",
        "typescript-sort-keys",
        "prettier",
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "project": "tsconfig.json",
      }
    },
    {
      files: ['**/*/*.{test,spec}.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
}
