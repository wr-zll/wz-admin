const path = require('path');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',

    outputDir:process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',

    lintOnSave: false,

    chainWebpack: (config)=> {

    },
    configureWebpack:(config)=>{
        config.resolve = {
            extensions:['.js','.json','.vue'],
            alias:{
                '@':path.resolve(__dirname,'./src'),
                'public': path.resolve(__dirname,'./public')
            }
        }

    },
    css: {
        extract:true,
        sourceMap:false,
        loaderOptions: {
          sass: {
            prependData:`@import "./src/styles/main.scss";`
          }
        }
      },
      //webpack-dev-server 相关配置
      devServer: {                
       // publicPath: '/dist',        // 路径，可省略
       // open: 'Google Chrome',      // 浏览器选择
        compress: true,             // 压缩
        host: '0.0.0.0',            // 设置局域网访问
        port: '3000',               // 设置端口
        hot: true,                  // 热更新
        inline: true,               // 热更新用
        historyApiFallback: true,  // H5用
       // proxy:{},
    },
}