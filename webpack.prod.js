const path = require("path");
const common = require("./webpack.common.js");
const merge = require("webpack-merge").merge;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[fullhash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [ 
            new CssMinimizerWebpackPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
              template: "./src/links/template.html",
              minify: {
                  removeAttributeQuotes: true,
                  collapseWhitespace: true,
                  removeComments: true
              }
          })
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
        new CleanWebpackPlugin()
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
                    MiniCssExtractPlugin.loader, //3 Extract CSS into files
                    "css-loader",   //2. turns css into commonJS
                    "sass-loader"   //1. Turns scss into css
                ],
            }
        ],
    }
});
