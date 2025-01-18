/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: { node: true, es6: true, browser: true },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: { parser: '@typescript-eslint/parser', ecmaVersion: 'latest' },
  plugins: ['import', '@typescript-eslint', 'unused-imports'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.app.json',
      },
      node: true,
    },
  },
  rules: {
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'error',
    'vue/no-ref-as-operand': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'no-console': 'warn',
    'no-use-before-define': 'off',
    'no-warning-comments': 'warn',
    'padding-line-between-statements': 'off',
    'unused-imports/no-unused-imports': 'error',
    'vue/no-multiple-template-root': 'off',
    'vue/no-undef-components': 'error',
  },
}
