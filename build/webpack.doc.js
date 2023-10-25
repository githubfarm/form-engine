const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const launchEditorMiddleware = require('launch-editor-middleware');

const config = require('./config');

const isProd = process.env.NODE_ENV === 'production';

const webpackConfig = {
  mode: process.env.NODE_ENV,
  // 入口
  entry: {
    docs: ['./document/entry.js'],
    demo: ['./src/views/index/index.js'],
    preview: ['./src/views/preview/index.js']
  },
  // 输出
  output: {
    path: path.resolve(process.cwd(), './dist/doc/'),
    publicPath: process.env.CI_ENV || '',
    // 打包后的js文件名
    filename: '[name].[hash:7].js',
    // 文件分块
    chunkFilename: isProd ? '[name].[hash:7].js' : '[name].js'
  },
  // resolve 这个用来干嘛的？
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  // 启动服务
  devServer: {
    host: '0.0.0.0',
    port: 8087,
    // before: (app) => {
    //   /*
    //    * 编辑器类型 :此处的指令表示的时各个各个编辑器在cmd或terminal中的命令
    //    * webstorm
    //    * code // vscode
    //    * idea
    //   */
    //   app.use('/__open-in-editor', launchEditorMiddleware('code'));
    // }
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  // loader配置
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(vue|jsx?)$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader'
      // },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // md文档，先使用'./md-loader/index.js'编译，再用'vue-loader'编译
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js')
          }
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        // todo: 这种写法有待调整
        // query: {
        //   limit: 10000,
        //   name: path.posix.join('static', '[name].[hash:7].[ext]')
        // }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 入口文件index.html的模板
    new HtmlWebpackPlugin({
      template: './document/index.tpl',
      filename: './index.html',
      favicon: './document/favicon.ico',
      chunks: ['chunk-vendors', 'chunk-common', 'docs'],
    }),
    new HtmlWebpackPlugin({
      // 入口文件html模板
      template: './public/demo.tpl',
      // 打包后的html文件名
      filename: './demo.html',
      // 引入的js
      chunks: ['chunk-vendors', 'chunk-common', 'demo'],
    }),
    new HtmlWebpackPlugin({
      template: './public/preview.tpl',
      filename: './preview.html',
      chunks: ['chunk-vendors', 'chunk-common', 'preview'],
    }),
    // new CopyWebpackPlugin([
    //   { from: 'document/versions.json' }
    // ]),
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.FAAS_ENV': JSON.stringify(process.env.FAAS_ENV)
    }),
    new webpack.LoaderOptionsPlugin({
      vue: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    })
  ],
  optimization: {
    minimizer: []
  },
  // devtool: '#eval-source-map'
};

if (isProd) {
  // 移除vue、vue-router、highlight
  webpackConfig.externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    'highlight.js': 'hljs'
  };
  webpackConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:7].css'
    })
  );
  webpackConfig.optimization.minimizer.push(
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: false
    }),
    new OptimizeCSSAssetsPlugin({})
  );
  // webpackConfig.devtool = false;
}

module.exports = webpackConfig;
