// import babel from 'rollup-plugin-babel';
import buble from '@rollup/plugin-buble';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import builtins from 'rollup-plugin-node-builtins';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
  import typescript from '@rollup/plugin-typescript';

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/index.js',
      format: 'umd',
      name: '111',
    },
    {
      file: 'build/index.cjs.js',
      format: 'cjs',
      name: '111',
    },
    {
      file: 'build/index.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    alias({
      entries: {
        '@': './src',
      },
    }),
    resolve({
      module: true,
      jsnext: true,
      main: true,
      preferBuiltins: true,
      browser: true,
      modulesOnly: true,
    }),
    commonjs(),
    buble(),
    builtins(),
    terser(),
    filesize(),
            typescript(),
      ],
};

export default config;
