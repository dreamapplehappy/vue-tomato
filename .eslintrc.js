module.exports = {
    parserOptions: {
        parser: require.resolve('babel-eslint'),
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended'
    ],
    env: {
        es6: true,
        node: true,
        browser: true
    },
    rules: {
        quotes: ['error', 'single'],
        semi: 'error',
        'space-before-blocks': ['error', 'always']
    }
};
