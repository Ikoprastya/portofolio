const CACHE_NAME = 'my-cache-v2'; // Ganti versi cache jika ada perubahan
const urlsToCache = [
    '/project/abccardeal1.webp',
    '/project/abccardeal2.webp',
    '/project/abccardeal3.webp',
    '/project/abccardealthumb.webp',
    '/project/video/abccardeal.mp4',
    
    '/project/abcjobportal1.webp',
    '/project/abcjobportal2.webp',
    '/project/abcjobportal3.webp',
    '/project/abcjobportalthumb.webp',
    '/project/video/abcjobportal.mp4',

    '/project/abclearning1.webp',
    '/project/abclearning2.webp',
    '/project/abclearning3.webp',
    '/project/abclearningthumb.webp',
    '/project/video/abclearning.mp4',

    '/project/abcxyzui1.webp',
    '/project/abcxyzui2.webp',
    '/project/abcxyzui3.webp',
    '/project/abcxyzuithumb.webp',
    '/project/video/abcxyzui.mp4',

    '/project/dbdesigncomportal1.webp',
    '/project/dbdesigncomportal2.webp',
    '/project/dbdesigncomportal3.webp',
    '/project/dbdesigncomportalthumb.webp',
    '/project/video/dbdesigncomportal.mp4',

    '/project/mcqjava1.webp',
    '/project/mcqjava2.webp',
    '/project/mcqjava3.webp',
    '/project/mcqjavathumb.webp',
    '/project/video/mcqjava.mp4',

    '/project/redpalm1.webp',
    '/project/redpalm2.webp',
    '/project/redpalmthumb.webp',
    '/project/video/redpalm.mp4',

    '/project/jumpavendor1.webp',
    '/project/jumpavendor2.webp',
    '/project/jumpavendor3.webp',
    '/project/jumpavendorthumb.webp',
    '/project/video/jumpavendor.mp4',

    '/project/wibaloka1.webp',
    '/project/wibaloka2.webp',
    '/project/wibaloka3.webp',
    '/project/wibaloka4.webp',
    '/project/wibaloka5.webp',
    '/project/wibalokathumb.webp',
    '/project/video/wibaloka.mp4',

];

// **1. Event Install**
// Cache semua file dalam `urlsToCache` saat Service Worker diinstall
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Caching files...');
      return cache.addAll(urlsToCache);
    })
  );
});

// **2. Event Activate**
// Hapus cache lama jika versi cache telah diperbarui
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// **3. Event Fetch**
// Intercept permintaan dan coba ambil dari cache terlebih dahulu
self.addEventListener('fetch', (event) => {
  console.log('Service Worker: Fetching', event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return file dari cache jika tersedia, jika tidak fetch dari server
      return response || fetch(event.request);
    })
  );
});
