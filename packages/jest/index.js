module.exports = {
  overrides: [
    /** Only uses Testing Library lint rules in test files */
    {
      files: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
        'plugin:testing-library/react',
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        'jest/consistent-test-it': ['warn', { fn: 'it' }],
        'jest/expect-expect': 'off',
        'jest/no-alias-methods': 'warn',
        'jest/no-commented-out-tests': 'off',
        'jest/prefer-comparison-matcher': 'warn',
        'jest/prefer-equality-matcher': 'warn',
      },
    },
  ],
};
