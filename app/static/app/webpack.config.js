var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);

module.exports = {

    entry: [path.resolve(ROOT_PATH, 'src/index.js')],

    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        filename: 'bundle.js',
        publicPath: path.resolve(ROOT_PATH, 'images')
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    }
};
