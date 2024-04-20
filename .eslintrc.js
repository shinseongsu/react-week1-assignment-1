module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    actor: 'readonly',
    Feature: 'readonly',
    Scenario: 'readonly',
  },
  ignorePatterns: ['build', 'dist', 'public'],
  settings: {
    react: {
      version: 'latest',
    },
  },
  rules: {
    'no-console': 'error',
    'import/prefer-default-export': 'off',
  },
};
