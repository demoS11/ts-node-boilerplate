module.exports = {
    env: {
        browser: false,
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: '2020',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {},
};
