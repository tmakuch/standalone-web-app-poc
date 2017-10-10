const root = require('./helpers').root;

module.exports = {
    entry: root('/src/scripts/service-worker.js'),

    output: {
        path: root('dist'),
        filename: 'service-worker.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /\.spec.js$/,
                    /node_modules/
                ]
            }
        ]
    }
};