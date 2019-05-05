module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'camelcase': 2,
        'id-length': 2,
        'keyword-spacing': 2,
        'space-infix-ops': 2,
        'comma-spacing': 2,
        'space-before-blocks': 2,
        'spaced-comment': 2,
        'key-spacing': 2,
        'no-multi-spaces': 2,
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-before-function-paren': [
            'error',
            'never'
        ],
        'func-call-spacing': [
            'error',
            { 'max': 1 }
        ],
        'no-multiple-empty-lines': [
            'error',
            { 'max': 1 }
        ],
        'padded-blocks': [
            'error',
            'never'
        ],
        'no-floating-decimal': [ 'error' ],
        'object-property-newline': [ 'error' ],
        'brace-style': [ 
            'error' , 
            '1tbs' 
        ],
        'eqeqeq': [
            'error', 
            'always', 
            { 'null': 'ignore' }
        ],
        'no-array-constructor': [ 'error' ],
        'no-undef': [
            'error', 
            { "typeof": true }
        ]
    }
};