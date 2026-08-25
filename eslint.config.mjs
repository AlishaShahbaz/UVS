import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

/**
 * ESLint 9 flat config.
 *
 * `eslint-config-next` still ships an eslintrc-shaped config, so it is bridged
 * through FlatCompat rather than imported directly — importing it as a flat
 * config is what produced the "Failed to patch ESLint" error during the build.
 */
const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

export default [
  { ignores: ['.next/**', 'node_modules/**', 'out/**'] },
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
];
