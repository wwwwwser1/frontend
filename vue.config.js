const path = require('path')
const resolve = dir => path.join(__dirname, dir);
const webpack = require("webpack");

module.exports = {
    configureWebpack: {
        plugins: [
          new webpack.ProvidePlugin({
            // 将 $ 变成全局变量
            $: 'jquery',
            jQuery: 'jquery',
            "windows.jQuery":"jquery"
          })
        ]
    },
	chainWebpack: config => {
        // 添加别名
      config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            
	}
}