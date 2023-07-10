/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  rules: {
    'linebreak-style': 0,
    'operator-linebreak': 0,
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'never'],
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
