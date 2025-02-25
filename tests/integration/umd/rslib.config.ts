import { defineConfig } from '@rslib/core';
import { generateBundleUmdConfig } from 'test-helper';

export default defineConfig({
  lib: [generateBundleUmdConfig()],
  source: {
    entry: {
      index: './src/index.js',
    },
  },
});
