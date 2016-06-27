import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

const sharedPlugins = [
  nodeResolve(),
  babel({
    exclude: 'node_modules/**',
    presets: ['es2015-rollup', 'react'],
    babelrc: false,
  }),
  commonJS({
    include: 'node_modules/**',
  }),
];

if (process.env.MINIFY) {
  sharedPlugins.push(uglify());
}

const destination = process.env.MINIFY
  ? 'lib/notifications-react.umd.min.js' : 'lib/notifications-react.umd.js';

export default {
  entry: 'src/index.js',
  external: [
    'react',
  ],
  dest: destination,
  globals: {
    react: 'React',
  },
  format: 'umd',
  moduleName: 'NotificationsReact',
  plugins: sharedPlugins,
};
