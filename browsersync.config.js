//browser-sync start --server dist --files dist --https
module.exports = {
    files: 'dist',
    server: 'dist',
    proxy: false,
    ghostMode: {
        clicks: false,
        scroll: false,
        location: false,
        forms: {
            submit: false,
            inputs: false,
            toggles: false
        }
    },
    https: {
        cert: './config/https/cert.pem',
        key: './config/https/key.pem'
    }
};