
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

// 根据html名称设置内容cls
const getHtmlConfig = (name, title) => {
    return {
        template : './src/view/'+ name +'.html',
        filename : 'view/'+ name +'.html',
        title    : title,
        inject   : true,
        hash     : true,
        chunks   : ['common', name]
    }
}

var config = {
    entry: {
        'common' : ['./src/page/common/index.js'],
        'index'  : ['./src/page/index/index.js'],
        'news'   : ['./src/page/news/index.js']
    },
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
         // 解析.css文件
         {
            test   : /\.css$/,
            loader : ExtractTextPlugin.extract("style", 'css')
         },
         // 解析图片、文字等资源
         { 
            test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=100&name=resource/[name].[ext]'
         },
         // 解析.scss文件
         {
            test   : /\.scss$/,
            loader : ExtractTextPlugin.extract("style", 'css!sass') //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
         },
         {  
            test   : /\.js$/, 
            loader : 'babel-loader'
         },
         
        ]
       },
    plugins: [

        // 将jquery暴露，其他模块使用时，不需要import或require
        new webpack.ProvidePlugin({
            $: 'jquery',
        }),
        // webpack，提取公共的模块
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        }),
        // 对样式文件，进行单独打包
        new ExtractTextPlugin("css/[name].css"),

        // 打包html页面
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页--轻松一刻')),
        new HtmlWebpackPlugin(getHtmlConfig('news', '新闻热点')),

        // 运行npm命令，自动打开浏览器中并访问该地址
        new OpenBrowserPlugin({ url: 'http://localhost:8088' })
    ],
}

if( WEBPACK_ENV == 'dev' ){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088')
}

module.exports = config;