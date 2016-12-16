/**
 * Created by lizc on 2016/12/16.
 */
var path = require('path');

module.exports = {
    entry: path.resolve('', 'app/app.js'),
    output: {
        path: path.resolve('', 'build'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8196'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
}