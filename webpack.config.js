/*
* @Author: yuey9507
* @Date:   2018-01-22 18:10:23
* @Last Modified by:   yuey9507
* @Last Modified time: 2018-01-30 17:28:35
*/
const path = require('path');
const root = __dirname;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  // 入口文件
  entry: [
    'react-hot-loader/patch', // 激活HMR
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    path.resolve(root, 'src/ReactUI/main.js')
  ],
  // 出口文件
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(root, 'dist'),
    publicPath: '/'
  },
  /*externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },*/
  // loaders
  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015']
            }
        },
        {
            test: /\.(s)?css$/,
            loader: 'style-loader!css-loader!sass-loader'
        },
        /*{ 
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000' 
        }*/
        { test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Demo',
      template: path.resolve(root, 'template.html')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(), // 热替换插件
    /*new webpack.NamedModulesPlugin(),*/ // 执行热替换时打印模块名字
    commonsPlugin
  ],
  devServer: {
    hot: true, // 激活服务器的HMR
    inline: true,
    //contentBase: path.resolve(root, 'dist'),
    //publicPath: '/',
    clientLogLevel: "none",
    port: 666
    //historyApiFallback: true
  }
}