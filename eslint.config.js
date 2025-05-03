import { createConfigForNuxt } from '@nuxt/eslint-config'
import pluginImport from 'eslint-plugin-import'

export default createConfigForNuxt({
    overrides: [
        {
            files: ['**/*.{js,ts,vue}'],
            plugins: {
                'import': pluginImport,
            },
            rules: {
                'import/order': [
                    'warn',
                    {
                        groups: [
                            'builtin',
                            'external',
                            'internal',
                            'parent',
                            'sibling',
                            'index'
                        ],
                        'newlines-between': 'always',
                        alphabetize: {
                            order: 'asc',
                            caseInsensitive: true
                        }
                    }
                ]
            }
        }
    ]
})
