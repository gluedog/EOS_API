module.exports = {
    "env": {
        "es2020": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    rules: {
        camelcase: 'off',
        complexity: 'off',
        'comma-dangle': 'off',
        'constructor-super': 'error',
        'dot-notation': 'error',
        eqeqeq: ['error', 'smart'],
        'guard-for-in': 'error',
        'id-blacklist': [
          'error',
          'any',
          'Number',
          'number',
          'String',
          'string',
          'Boolean',
          'boolean',
          'Undefined',
          'undefined',
        ],
        'id-match': 'error',
        'max-classes-per-file': ['error', 1],
        'max-len': ['error', 120],
        'new-parens': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-debugger': 'error',
        'no-empty': 'error',
        'no-eval': 'error',
        'no-fallthrough': 'off',
        'no-invalid-this': 'off',
        'no-new-wrappers': 'error',
        'no-shadow': [
          'error',
          {
            hoist: 'all',
          },
        ],
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-underscore-dangle': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'object-shorthand': 'warn',
        'one-var': ['error', 'never'],
        // "prefer-arrow/prefer-arrow-functions": "error",
        radix: 'error',
        'spaced-comment': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'off'
      }
};