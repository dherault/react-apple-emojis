import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import json from '@rollup/plugin-json'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'lib/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      external(),
      resolve(),
      json(),
      commonjs({
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
      }),
    ],
  },
]
