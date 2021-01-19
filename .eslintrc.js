module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': 'off', // Investigate need for this
        // Spaces around contents of curly braces
        'object-curly-spacing': ['error', 'always'],
        // Single quotes primarily
        quotes: ['error', 'single'],
        // Force semicolons
        semi: ['error', 'always'],
        // Use 2 spaces to indent our code
        indent: ['error', 2],
        // Strip useless spaces
        'no-multi-spaces': ['error'],
        // Add some order to import statements
        'sort-imports': ['error', { allowSeparatedGroups: true }],
    },
};