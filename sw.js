self.addEventListener('fetch', function(e) { e.respondWith(caches.match(e.request).then(function(r) { return r || fetch(e.request); })); });
