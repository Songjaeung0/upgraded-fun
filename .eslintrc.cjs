module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'react-refresh'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'eslint-config-prettier'],
  ignorePatterns: ['dist'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  }
};
