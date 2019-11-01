module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
  },
  plugins: [
    'babel',
    'react',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'indent': ['error', 2],
    'no-const-assign': 'warn',
    'no-console': 0,
    'arrow-parens': ['error', 'as-needed'],
    'no-dupe-keys': ['error'],
    'no-undef': 'error',
    'space-infix-ops': ['error'],
    'quotes': ['error', 'single'],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 0 }],
    'no-unreachable': 'warn',
    'no-trailing-spaces': 'error',
    'no-unused-vars': ['warn', { 'args': 'none' }],
    'constructor-super': 'warn',
    'key-spacing': ['error', { 'mode': 'minimum' }],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'no-var': 'error',
    'semi': [ 'error', 'never'],

    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-typos': 'error',
    'react/no-string-refs': 'error',
    'react/no-unused-state': 'warn',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': ['warn', {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
    }],
    'react/style-prop-object': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-tag-spacing': 'error',
  },
}