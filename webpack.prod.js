const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [{
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                exclude: "/node_modules/",
                loader: "file-loader",
                options: {
                    outputPath: 'fonts'
                }
            }
        ]
    }
});