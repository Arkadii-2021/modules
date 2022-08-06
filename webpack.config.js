/* module.exports = {
	entry: "./src/index.js"
} */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractorPlugin = require('mini-css-extract-plugin');


module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCSSExtractorPlugin.loader,
					'css-loader'
				]
			}
		] 
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),
		new MiniCSSExtractorPlugin()
	]
}