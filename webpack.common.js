const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/js/index.js",
        vendor: "./src/js/libraries/vendor.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/links/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpe?g\jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[fullhash].[ext]",
                        outputPath: "imgs",
                    }
                }
            }
        ],
    },
};
