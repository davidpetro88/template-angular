const { defineConfig } = require('eslint-define-config');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const angularEslintPlugin = require('@angular-eslint/eslint-plugin');
const typescriptEslintParser = require('@typescript-eslint/parser');
const angularEsLintParser = require('@angular-eslint/template-parser');
const path = require('path');

// Configuração do ESLint
module.exports = defineConfig([
    {
        ignores: [
            'projects/**/*',
            '.angular/**/*',
            'codegen.ts',
            '**/*.js',
            'src/main.server.ts',
        ],
        // Configurações globais do TypeScript
        languageOptions: {
            parser: typescriptEslintParser,
            parserOptions: {
                project: [
                    path.join(__dirname, 'tsconfig.app.json'),
                    path.join(__dirname, 'tsconfig.spec.json'),
                    path.join(__dirname, 'tsconfig.server.json')
                ],
                tsconfigRootDir: __dirname,
                //createDefaultProgram: true,
            },
        },
        // Plugins usados no projeto
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            '@angular-eslint': angularEslintPlugin,
            'tailwindcss': require('eslint-plugin-tailwindcss'),
        },
        files: ['**/*.ts', '**/*.html'],
        rules: {
            // Regras relacionadas ao Angular
            '@angular-eslint/directive-selector': [
                'error',
                { type: 'attribute', prefix: 'app', style: 'camelCase' },
            ],
            '@angular-eslint/component-selector': [
                'error',
                { type: 'element', prefix: 'app', style: 'kebab-case' },
            ],

            // Regras gerais de estilo de código
            'no-empty-function': 'off',
            '@typescript-eslint/no-empty-function': 'error',
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
            'no-console': ['error', { allow: ['warn', 'error'] }],
            'spaced-comment': [
                'error',
                'always',
                {
                    markers: ['/'],
                    exceptions: ['*'],
                },
            ],
            semi: ['error', 'always'],
            '@typescript-eslint/explicit-module-boundary-types': 'error',
            'tailwindcss/classnames-order': 'warn',
            'tailwindcss/no-custom-classname': 'off',
        },
    },
    {
        // Configuração para arquivos HTML com Angular
        files: ['**/*.html'],
        languageOptions: {
            parser: angularEsLintParser,
            parserOptions: {
                project: [
                    path.join(__dirname, 'tsconfig.app.json'),
                    path.join(__dirname, 'tsconfig.spec.json'),
                    path.join(__dirname, 'tsconfig.server.json')
                ],
                tsconfigRootDir: __dirname,
                // createDefaultProgram: true,
                extraFileExtensions: ['.html'],
            },
        },
        plugins: {
            '@angular-eslint': angularEslintPlugin,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-empty-function': 'off',
        },
    }
]);
