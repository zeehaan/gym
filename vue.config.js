<<<<<<< HEAD
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/gym/',
  transpileDependencies: true
})
=======
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8086',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' 
        }
      }
    }
  }
}
>>>>>>> main
