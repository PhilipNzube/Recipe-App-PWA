let cacheData = "MyAppCache";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.b3a04c0c.js',
                '/static/css/main.b8cc3529.css',
                '/manifest.json',
                '/static/media/BG.4b166807ad62b966f477.jpg',
                '/static/media/vegetable.5c2ee5bb1195793cc921.jpg',
                '/favicon.ico',
                '/logo192.png',
                '/index.html',
                '/'
            ])
        })
    )
})
this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
            })


        )
    }
})
