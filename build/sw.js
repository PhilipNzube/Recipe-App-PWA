let cacheData = "MyAppCache";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.108fd2fd.js',
                '/static/css/main.199e6e4e.css',
                '/manifest.json',
                '/static/media/BG.4b166807ad62b966f477.jpg',
                '/static/media/vegetable.5c2ee5bb1195793cc921.jpg',
                '/static/media/pancakes.3fd9c7c4df4ea9cd8dde.jpeg',
                '/static/media/jollof.9c70b90e338afb28eabe.jpeg',
                '/static/media/chin.f089efc237a75101cc37.jpeg',
                '/static/media/fried.81a9006b4052bced3207.jpeg',
                '/static/media/ewedu1.995d3a754eec1a8d7b1f.jpeg',
                '/ICON.png',
                '/ICON192.png',
                '/ICON512.png',
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