const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true
      }
    }
  }
};
