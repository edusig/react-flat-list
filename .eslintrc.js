const path = require('path');
const tsconfigPath = path.resolve(__dirname, './tsconfig.esm.json');

module.exports = {
  root: true,
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'plugin:@typescript-eslint/strict', 'prettier', '@edusig/eslint-config', 'plugin:storybook/recommended'],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'jest-dom', 'testing-library'],
  ignorePatterns: ['node_modules', 'lib', '.eslintrc.js', 'jest.config.js', 'jest.setup.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: tsconfigPath,
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['@testing-library/jest-dom'],
      },
    ],

    'prettier/prettier': 'error',

    'testing-library/await-async-queries': 'error',
    'testing-library/no-await-sync-queries': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',

    'jest-dom/prefer-checked': 'error',
    'jest-dom/prefer-enabled-disabled': 'error',
    'jest-dom/prefer-required': 'error',
    'jest-dom/prefer-to-have-attribute': 'error',
  },
};
