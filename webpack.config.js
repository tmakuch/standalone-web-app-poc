const merge = require('webpack-merge');

const web = {
    commons: require('./config/webpack.web.common.js'),
    dev: require('./config/webpack.web.dev.js'),
    prod: require('./config/webpack.web.prod.js')
};

const worker = {
    commons: require('./config/webpack.worker.common.js'),
    dev: require('./config/webpack.worker.dev.js'),
    prod: require('./config/webpack.worker.prod.js')
};

module.exports = [
    merge(web.commons, process.env.NODE_ENV === 'prod' ? web.prod : web.dev),
    merge(worker.commons, process.env.NODE_ENV === 'prod' ? worker.prod : worker.dev)
];