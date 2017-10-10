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

    watch: true,
    watchOptions: {
        ignored: 'src/**/*.*'
    }
};