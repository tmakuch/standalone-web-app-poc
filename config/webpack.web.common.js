const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const root = require('./helpers').root;

module.exports = {
    entry: root('/src/scripts/index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /\.spec.js$/,
                    /node_modules/
                ]
            },
            {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'less-loader' ]
                }),
                include: root('src/styles')
            }
        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency',
            inject: 'body'
        }),
        new ExtractTextPlugin('index.css'),
        new CopyPlugin([
            { from: 'src/manifest.json' },
            { from: 'src/resources', to: 'resources' }
        ])
    ]
};