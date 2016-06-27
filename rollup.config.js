import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import inject from 'rollup-plugin-inject'

const sharedPlugins = [
    nodeResolve(),
    babel({
      exclude: 'node_modules/**',
      presets: ['es2015-rollup', 'react'],
      babelrc: false
    }),
    commonJS({
      include: 'node_modules/**',
      exclude: ['node_modules/react/**']
    }),
];

if (process.env.MINIFY) {
  sharedPlugins.push(uglify());
}

const destination = process.env.MINIFY ?
  'lib/notifications.min.js' :
  'lib/notifications.js';

export default {
  entry: 'src/index.js',
  dest: destination,
  format: 'umd',
  moduleName: 'Notifications',
  plugins: sharedPlugins
};
