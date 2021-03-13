import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.ts'];
const declarationFiles = { compilerOptions: { declaration: true } };

export default [
  // UMD Production
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/simate.min.js',
      format: 'umd',
      name: 'Simate',
      globals: {
        react: 'React'
      }
    },
    external: ['react'],
    plugins: [
      nodeResolve({
        extensions
      }),
      typescript({ tsconfigOverride: declarationFiles }),
      babel({
        extensions,
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true
      }),
      commonjs(),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  }
];
