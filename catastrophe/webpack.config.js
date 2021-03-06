var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
entry:[ 'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
	     __dirname + "/src/components/index.js",
       ],
output: {
path: __dirname + "/public/",
filename: "bundle.js",
publicPath: "/"
},
module: {
loaders: [
{
test: /\.js$/,
exclude: /node_modules/,
loader: 'babel-loader',
query: {
presets: ['env','react'],
plugins:['react-hot-loader/babel'],
}
},
{
	test: /\.css$/,
	use:[
      {loader:"style-loader"},
      {loader:"css-loader"}]
}
]
},
plugins: [
new webpack.HotModuleReplacementPlugin(),
new HtmlWebpackPlugin({
inject: true,
template: __dirname + "/public/index.html",

}),
],
devServer: {
contentBase: "./public",
historyApiFallback: true,
inline: true,
hot:true
}
};