/* eslint-env node */
/*
 *  ESLint run control for Try Outs project.
 *  Created On 04 January 2022
 */

module.exports = {
    env: {
        es2021: true,
        browser: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['prettier', 'simple-import-sort'],
    rules: {
        'prettier/prettier': 'error',
        'simple-import-sort/imports': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
    },
}
