module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/newline-after-import': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-tabs': 'off',
    '@typescript-eslint/camelcase': 'off',
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-trailing-spaces': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'prefer-destructuring': 'off',
    'lines-between-class-members': 'off',
    // '': 'off',
    // '': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
