const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
  /** mode: 默认 production */
  mode: 'development',
  /** entry的上下文 */
  context: path.resolve(__dirname, './'),
  /** entry的默认值 */
  entry: './src/index.js',
  /** output的默认值
   * __dirname: node全局变量 当前项目 绝对路径
   * path.resolve(): 拼接路径 不需要添加'/'
   * '/'是根目录 就不会进行拼接
   */
  output: {
    filename: 'static/js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    /** 每次打包之前清空 output 文件夹下所有 */
    new CleanWebpackPlugin(),
    /**
     * 两个作用：
     * 1. 为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题
     * 2. 可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口
     */
    new htmlWebpackPlugin({
      template: './index.html',
      // filename: './index.html', // html js 打包分层次
      minify: true, // TODO: 压缩？
      hash: true,
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.vue', 'json'], // 模块化导入 默认这三种类型
    alias: { // src别名
      '@': path.resolve('src'),
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: '8089',
  },
}