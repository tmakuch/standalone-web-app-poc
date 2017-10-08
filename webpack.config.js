const merge = require('webpack-merge');

const commons = require('./config/webpack.common.js');
const dev = require('./config/webpack.dev.js');
const prod = require('./config/webpack.prod.js');

module.exports = merge(commons, process.env.NODE_ENV === 'prod' ? prod : dev);