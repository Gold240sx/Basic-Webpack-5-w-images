const path = require("path");
const common = require("./webpack.common.js");
const merge = require("webpack-merge").merge;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[path][name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/links/template.html",
        }),
        new HtmlWebpackPlugin({
            filename: "links/sign-in.html",      // This is where ot imports the file from
            template: "./src/links/sign-in.html", // This is where ot imports the file from
            chunks: ['signin'],
            }),
        new HtmlWebpackPlugin({
            filename: "links/sakura-reference.html",
            template: "./src/links/sakura-reference.html",
            chunks: ['sakura-reference'],
        }),
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
