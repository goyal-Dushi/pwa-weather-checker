const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

// install SW : open cache and add files to it
this.self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache opened");
      return cache.addAll(urlsToCache);
    })
  );
});

// listen to requests
this.self.addEventListener("fetch", (event) => {
  event.respondWith(
    // listening for all the request out page is making: img, api's,
    caches.match(event.request).then(() => {
      // fetching all the requests
      return (
        fetch(event.request)
          // in case the request fails , load the offline version
          .catch(() => caches.match("offline.html"))
      );
    })
  );
});

// activate SW : remove all previous caches and keep new/updated one
this.self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          // returning only cacheNames present in the cacheWHitelist
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
