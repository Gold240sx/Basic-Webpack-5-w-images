const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/js/index.js",
        vendor: "./src/js/libraries/vendor.js",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpeg|jpg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        context: path.resolve(__dirname, 'src/'),
                        name: '[path][name].[ext]',
                        esModule: false
                    }
                }], type: 'javascript/auto'
            },
        ],
    },
};
