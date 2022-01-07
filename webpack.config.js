const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
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
        ]
    }
};