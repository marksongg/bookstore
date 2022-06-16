const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true
  devServer:{
    proxy: {
      // [/api]是后端数据接口的上下文路径
      '/api':{
        target: 'http://111.229.37.167/',
        changeOrigin: true,
      }
    }
  },
  configureWebpack: {
    devtool:'source-map'
  }
})
