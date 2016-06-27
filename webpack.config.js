var path = require('path');

module.exports = {
  entry: path.join(process.cwd(), 'src', 'index.js'),
  output: {
    library: 'NotificationsReact',
    libraryTarget: 'umd',
    path: 'lib',
    filename: 'notifications-react.umd.js'
  },
  externals: [{
    react: 'React',
    notificationsjs: 'Notifications'
  }],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
