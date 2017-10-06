const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const root = require('./helpers').root;

module.exports = {
    devtool: 'source-map',

    output: {
        path: root('dist'),
        filename: 'index.js'
    },

    plugins: [
        new LoaderOptionsPlugin({
            debug: true,
            options: {}
        })
    ],

    devServer: {
        port: '8080',
        host: '0.0.0.0',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
};