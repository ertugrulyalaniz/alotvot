module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vuejs-accessibility/recommended',
        'prettier',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/script-setup-uses-vars': 'error',
        'vue/require-default-prop': 'off',
        'vue/html-self-closing': 'off',
        'vuejs-accessibility/no-onchange': 'off',
        'vuejs-accessibility/click-events-have-key-events': 'off',
        'vuejs-accessibility/form-control-has-label': 'off',
        'vuejs-accessibility/media-has-caption': 'off',
        'vuejs-accessibility/label-has-for': 'off',
        'vuejs-accessibility/anchor-has-content': 'off',
        'no-unused-vars': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/attribute-hyphenation': [
            'error',
            'always',
            {
                ignore: [],
            },
        ],
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
        $ref: 'writable',
        $computed: 'writable',
        $raw: 'readonly',
        $fromRefs: 'readonly',
    },
    ignorePatterns: ['*.md','components.d.ts'],
    overrides: [
        {
            files: ['*.md'],
            extends: ['plugin:md/recommended', 'prettier'],
        },
    ],
}
