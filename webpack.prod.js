const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require('path');
const { merge } = require('webpack-merge');
const folder = require("./webpack.config")

module.exports = merge(folder, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
        clean: true,
        assetModuleFilename: "img/[name]-[hash][ext]"

    }, optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            `...`,
            new CssMinimizerPlugin(), new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.sharpMinify,
                    options: {
                        encodeOptions: {
                            // Your options for `sharp`
                            // https://sharp.pixelplumbing.com/api-output
                        },
                    },
                },
            }),
        ],
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "style.[contenthash].css"
    })],
});