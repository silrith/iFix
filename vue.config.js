const { defineConfig } = require("@vue/cli-service");
const fs = require("fs");
module.exports = defineConfig({
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "de",
      localeDir: "i18n",
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Sunucu adresinizi buraya yazın
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
});
