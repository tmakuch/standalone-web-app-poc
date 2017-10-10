const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const root = require('./helpers').root;

module.exports = {
    output: {
        path: root('dist'),
        filename: 'index.js'
    },

    plugins: [
        new LoaderOptionsPlugin({
            debug: true,
            options: {}
        })
    ]
};