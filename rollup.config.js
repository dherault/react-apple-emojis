import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import { uglify } from 'rollup-plugin-uglify'
import json from '@rollup/plugin-json'
import packageJSON from './package.json'

const input = './src/index.js'
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js')

const commonjsOptions = {
  include: 'node_modules/**',
  // left-hand side can be an absolute path, a path
  // relative to the current directory, or the name
  // of a module in node_modules
  namedExports: {
    'node_modules/react/index.js': [
      'cloneElement',
      'createContext',
      'Component',
      'createElement',
    ],
    'node_modules/react-dom/index.js': [
      'render',
      'hydrate',
    ],
    'node_modules/react-is/index.js': [
      'isElement',
      'isValidElementType',
      'ForwardRef',
      'Memo',
    ],
    'node_modules/prop-types/index.js': [
      'elementType',
    ],
  },
}

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      external(),
      resolve(),
      json(),
      commonjs(commonjsOptions),
    ],
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.main),
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      external(),
      resolve(),
      json(),
      commonjs(commonjsOptions),
      uglify(),
    ],
  },
  // UMD
  {
    input,
    output: {
      file: packageJSON.browser,
      format: 'umd',
      sourcemap: true,
      name: 'reactSampleComponentsLibrary',
      globals: {
        react: 'React',
      },
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      external(),
      resolve(),
      json(),
      commonjs(commonjsOptions),
    ],
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.browser),
      format: 'umd',
      sourcemap: true,
      name: 'reactSampleComponentsLibrary',
      globals: {
        react: 'React',
      },
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      external(),
      resolve(),
      json(),
      commonjs(commonjsOptions),
      terser(),
    ],
  },
  // ES
  {
    input,
    output: {
      file: packageJSON.module,
      format: 'es',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      external(),
      resolve(),
      json(),
      commonjs(commonjsOptions),
    ],
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.module),
      format: 'es',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      external(),
      resolve(),
      json(),
      commonjs(commonjsOptions),
      terser(),
    ],
  },
]
