module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gym/'  
    : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8086',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}