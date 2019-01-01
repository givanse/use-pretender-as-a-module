const path = require('path');
const typescript = require('rollup-plugin-typescript');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

const selfId = path.resolve(__dirname, 'src/iife-self-placeholder.ts');

module.exports = {
  input: 'src/index.ts',
  external: [],
  output: [
    {
      name: 'server',
      file: 'dist/index.js',
      format: 'iife',
      globals: {},
    },
    {
      file: 'dist/index.es.js',
      format: 'es'
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript()
  ],
};

