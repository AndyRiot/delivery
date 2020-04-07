'use strict';

const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    mode: "production",
    entry: './dev/js/scripts.js',
    output: {
        filename: '../js/main.js',
        path: path.resolve(__dirname, "assets/css")
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new JavaScriptObfuscator({rotateUnicodeArray: true})
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: ['file-loader']
            }
        ],
    }
};
