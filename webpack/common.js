let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let autoprefixer = require('autoprefixer');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app: ["./src/app.jsx"]
    },
    output: {
        filename: "app.js",
        path: path.join(__dirname, "../app/")
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'raw', 'postcss', 'sass']
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)/,
                loader: 'file-loader'
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['app'], {
            root: path.join(__dirname, '..'),
            verbose: true
        }),
/*        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),*/
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: './src/images',
                to: './images'
            }
        ])
    ],
    resolve: {
        extensions: ['', '.jsx', '.js', '.css']
    },
    postcss: function () {
        return [autoprefixer()];
    }
};