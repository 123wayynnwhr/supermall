const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    //关闭 webpack 的性能提示
    performance: {
      hints: false
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'router': '@/router',
        'jquery': 'jquery',
      }
    },
    plugins: [

      new webpack.ProvidePlugin({

        $: "jquery",

        jQuery: "jquery",
        jquery: "jquery",
        "windows.jQuery": "jquery"

      })

    ],
    //警告 webpack 的性能提示
    performance: {
      hints: 'warning',
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js');
      }
    },
  }
}