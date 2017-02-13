const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const root = __dirname + '/dist';
const path = require('path');
const src = __dirname + '/src';

module.exports = {
    entry: {
        main : [
            "./src/main.js"
        ]
    },
    context: __dirname,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader"
            }
        ]
    },
    plugins: [ new CleanWebpackPlugin([root]) ],
    output: {
        path: root,
        filename: "[name].js"
    }
};