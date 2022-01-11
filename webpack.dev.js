const path = require("path");
const common = require("./webpack.common.js");
const merge = require("webpack-merge").merge;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/links/template.html",
            minify: {
                removeComments: true,
            }
        }),
        new HtmlWebpackPlugin({
            filename: "sign-in.html",
            template: "./src/links/sign-in.html",
            chunks: ['signin'],
            minify: {
                removeComments: true,
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3 injects styles into DOM
                    "css-loader",   //2. turns css into commonJS
                    "sass-loader"   //1. Turns scss into css
                ]
            }
        ]
    }
});
