const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  assetsDir: './',
  // baseUrl: process.env.NODE_ENV === 'production' ? '/vue-pwa-sample' : '/',
  outputDir: 'docs'
})
