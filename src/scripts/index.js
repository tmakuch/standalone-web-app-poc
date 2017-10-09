if (window.location.search === '?drop') {
    navigator.serviceWorker.getRegistration()
        .then(regi => regi.unregister())
        .then(() => alert('worker unregistered'))
        .catch((err) => {
            document.innerHTML = `<div class="font-size: 20em; color: red; text-align: center;"><p>Failed to remove worker.</p><p>${JSON.stringify(err)}</p></div>`
        });
} else {
    navigator.serviceWorker.register('/service-worker.js');
}