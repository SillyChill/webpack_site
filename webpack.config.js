const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const сopy = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './Assets/index.js',
  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
	module: {
		rules: [
			{
        		test: /\.(sass|scss)$/,
        		use: ExtractTextPlugin.extract(
        		{
          			fallback: 'style-loader',
          			use: ['css-loader', 'sass-loader']
        		})
      		},
      		{
        		test: /\.js$/,
        		exclude: /node_modules/,
        		use: {
          		loader: "babel-loader"
        		}
     		}
		]
	},
	plugins: [
	 	new HtmlWebpackPlugin({
	 		hash: true,
	 		title : 'test',
	 		template: './Assets/index.html'
	 	}),
	 	new ExtractTextPlugin({
      		filename: './css/style.bundle.css',
      		allChunks: true,
    	}),
	]    
  };
