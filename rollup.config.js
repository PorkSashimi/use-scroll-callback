import pluginTypescript from '@rollup/plugin-typescript';
import pluginBabel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
import pluginResolve from '@rollup/plugin-node-resolve';
import pluginCommonjs from '@rollup/plugin-commonjs';

/**
 * @type {import('rollup').RollupOptions}
 */
const configuration = {
  input: 'src/index.ts',
  plugins: [
    pluginResolve(),
    pluginCommonjs(),
    pluginTypescript(),
    getBabelOutputPlugin({ presets: [["@babel/preset-react"], ["@babel/preset-env", { "modules": false }]] }),
    pluginBabel({ babelHelpers: 'bundled' }),
    terser({ output: { comments: false } })
  ],
  external: [
    "react"
  ],
  output: [
    {
      format: 'esm',
      file: 'dist/index.js'
    }
  ]
}

export default configuration;