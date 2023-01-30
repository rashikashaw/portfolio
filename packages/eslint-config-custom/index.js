module.exports = {
  env: {
    'es2021': true
  },
  extends: [ 'turbo', 'prettier', 'plugin:react/recommended'],
  plugins: ['@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-key': 'off',
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    'arrow-spacing': 'error',
    'block-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    indent: ['error', 'tab', {
      'ignoreComments': true
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': ['error'],
    'max-len': ['error', {
      code: 80,
    }],
    'no-extra-parens': ['error', 'all'],
    'no-trailing-spaces': ['error'],
    'no-whitespace-before-property': ['error'],
    semi: ['error', 'always'],
    'default-case': ['error'],
    'dot-notation': ['error'],
    eqeqeq: ['error'],
    'no-console': ['error'],
    'no-else-return': ['error'],
    'no-inline-comments': ['error'],
    'no-lone-blocks': ['error'],
    'no-magic-numbers': ['error'],
    'no-return-assign': ['error', 'always'],
    'no-unneeded-ternary': ['error'],
    'no-unused-expressions': ['error'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'yoda': ['error', 'never'],
    'space-infix-ops': ['error'],
  },
};
