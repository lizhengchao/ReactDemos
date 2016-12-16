/**
 * Created with JetBrains WebStorm.
 * User: lizc
 * Date: 16-12-15
 * Time: 上午10:08
 * To change this template use File | Settings | File Templates.
 */
var path = require("path");

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