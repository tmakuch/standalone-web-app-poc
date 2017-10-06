const merge = require('webpack-merge');

const commons = require('./config/webpack.common.js');
const dev = require('./config/webpack.dev.js');

module.exports = merge(commons, dev);