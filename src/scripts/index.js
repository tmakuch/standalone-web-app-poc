require('../styles/index.less');

if (window.location.search === '?drop') {
    navigator.serviceWorker.getRegistration()
        .then(regi => regi !== undefined ? regi.unregister() : {})
        .then(() => console.log('Removed worker'))
        .catch((err) => console.log('Failed to remove worker', err));
} else if (window.location.search === '?reinstall') {
    navigator.serviceWorker.getRegistration()
        .then(regi => regi !== undefined ? regi.unregister() : {})
        .then(() => {
            console.log('Re-installing worker');
            setTimeout(() => navigator.serviceWorker.register('/service-worker.js'), 2000);
        })
        .catch((err) => console.log('Failed to reinstall worker', err));
} else {
    navigator.serviceWorker.register('/service-worker.js');
}