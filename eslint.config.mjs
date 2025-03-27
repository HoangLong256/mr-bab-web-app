import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  plugins: {
    perfectionist: perfectionistPlugin,
    prettier: prettierPlugin,
  },
  rules: {
    ...eslintConfigPrettier.rules,
    ...eslintPluginPrettierRecommended.rules,
    'perfectionist/sort-imports': 'error',
    'perfectionist/sort-interfaces': [
      'error',
      {
        fallbackSort: {
          order: 'asc',
          type: 'unsorted',
        },
        groups: [['property', 'optional-property'], 'method'],
        order: 'asc',
        type: 'alphabetical',
      },
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        fallbackSort: {
          order: 'asc',
          type: 'unsorted',
        },
        groups: ['unknown', 'method'],
        order: 'asc',
        type: 'alphabetical',
      },
    ],
    quotes: ['warn', 'single'], // Enforce single quotes via ESLint
    semi: ['warn', 'always'], // Enforce semicolons via ESLint
  },
});
