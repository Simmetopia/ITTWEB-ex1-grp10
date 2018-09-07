import typescriptPlugin from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

const plugins = [
  // nodeResolve makes rollup look for dependencies in the node_modules directory
  nodeResolve(),
  commonjs({
    // All of our own sources will be ES6 modules, so only node_modules need to be resolved with cjs
    include: 'node_modules/**',
    namedExports: {
      // The commonjs plugin can't figure out the exports of some modules, so if rollup gives warnings like:
      // ⚠️   'render' is not exported by 'node_modules/react-dom/index.js'
      // Just add the mentioned file / export here
    },
  }),
  typescriptPlugin({
    importHelpers: true,
    tsconfig: 'client.tsconfig.json',
  }),
];

plugins.push(uglify());

export default {
  input: './src/client/main.ts',
  sourceMap: true,
  output: {
    file: './build/public/bundle.js',
    format: 'iife',
    name: 'bundle',
  },
  plugins,
};