self.addEventListener('install',(event)=>{
    console.log("SW: Instalado");

    // Crear  caché
    const respCache = caches.open('cache-v1').then((cache)=>{
        cache.addAll([
            "./",
            "./index.html",
            "./manifest.json",
            "./images/img.jpg",
            "https://picsum.photos/300/200",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/webfonts/fa-solid-900.woff2"
        ])
    })
    event.waitUntil(respCache);
})


// only cache
self.addEventListener('fetch', (event)=>{
    const respCache = caches.match(event.request);
    event.respondWith(respCache);

    if(event.request.url.includes('https://reqres.in/api/register')){
        event.respondWith(fetch(event.request));
    }
})



