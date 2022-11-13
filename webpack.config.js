const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './js/index.js',

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }, {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.html$/i,
                loader: "html-loader",
            }, {
                test: /\.(png|jpe?g|svg|gif)$/i,
                type: 'asset/resource'
            }
        ],
    }, plugins: [new HtmlWebpackPlugin({
        template: "./index.html"
    })]
};