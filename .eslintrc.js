module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['destructuring', 'simple-import-sort', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
    'plugin:destructuring/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-inferrable-types': 1,
    '@typescript-eslint/no-unused-vars': [2, { args: 'none', ignoreRestSiblings: true }],
    'destructuring/in-params': ['error', { 'max-params': 0 }],
    'destructuring/no-rename': 2,
    'one-var': ['error', 'never'],
    'no-return-await': 2,
    curly: 2,
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: 'return' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'prefer-template': 2,
    'simple-import-sort/sort': 0,
    'sort-imports': 0,
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'import/order': ['error', { 'newlines-between': 'never' }],
  },
};
