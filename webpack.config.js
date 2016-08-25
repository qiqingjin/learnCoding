var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
  module.exports = {
     //插件项
      plugins:[
          commonsPlugin, 
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
          }),
          new webpack.HotModuleReplacementPlugin()
      ],
      devServer: {
        hot: true,
        inline: true
      },
     //页面入口文件配置
     entry: {
         index : './index.js'
     },
     //入口文件输出配置
     output:{
         path:'./bundle/',
         filename: '[name].bundle.js',
         publicPath: '/bundle'
     },
     // externals: {     //排除构建文件外
     // 'react': 'React'
     // },
     module: {
         //加载器配置
        loaders:[
         {
            test: /\.less$/,loader: 'style-loader!css-loader!less-loader'
        },
         {
              test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
         },
         {
             test: /\.js$/, loader: 'babel-loader', query:{
                 presets:['es2015']
             }
         }
         ]
     },
     resolve: { extensions: ['', '.js'] }
 };