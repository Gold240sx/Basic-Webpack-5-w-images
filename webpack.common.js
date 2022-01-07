const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/links/template.html"
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
            },
        ],
    },
};
