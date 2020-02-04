const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const PUBLIC_PATH = path.resolve(__dirname, 'public');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: false,
        hot: true,
        contentBase: PUBLIC_PATH,
        watchContentBase: true,
        port: 9000,
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader'},
                    { loader: 'sass-loader' }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Dev',
            filename: "public/index.html"
        }),
    ]
});