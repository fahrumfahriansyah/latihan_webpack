const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const { merge } = require('webpack-merge');
const folder = require("./webpack.config")

module.exports = merge(folder, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        clean: true,
        assetModuleFilename: "img/[name][ext]"

    },
    plugins: [new MiniCssExtractPlugin({
        filename: "style.css"
    })],
    watch: true
});