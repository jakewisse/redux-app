module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: '/node_modules/',
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  }
};
