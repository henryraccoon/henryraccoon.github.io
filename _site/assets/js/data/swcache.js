const resource = [
    /* --- CSS --- */
    '/henryraccoon.github.io/assets/css/style.css',

    /* --- PWA --- */
    '/henryraccoon.github.io/app.js',
    '/henryraccoon.github.io/sw.js',

    /* --- HTML --- */
    '/henryraccoon.github.io/index.html',
    '/henryraccoon.github.io/404.html',

    
        '/henryraccoon.github.io/about/',
    
        '/henryraccoon.github.io/categories/',
    
        '/henryraccoon.github.io/tags/',
    
        '/henryraccoon.github.io/archives/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/henryraccoon.github.io/assets/img/favicons/android-chrome-192x192.png',
        '/henryraccoon.github.io/assets/img/favicons/android-chrome-512x512.png',
        '/henryraccoon.github.io/assets/img/favicons/apple-touch-icon.png',
        '/henryraccoon.github.io/assets/img/favicons/favicon-16x16.png',
        '/henryraccoon.github.io/assets/img/favicons/favicon-32x32.png',
        '/henryraccoon.github.io/assets/img/favicons/favicon.ico',
        '/henryraccoon.github.io/assets/img/favicons/mstile-150x150.png',
        '/henryraccoon.github.io/assets/js/dist/categories.min.js',
        '/henryraccoon.github.io/assets/js/dist/commons.min.js',
        '/henryraccoon.github.io/assets/js/dist/home.min.js',
        '/henryraccoon.github.io/assets/js/dist/misc.min.js',
        '/henryraccoon.github.io/assets/js/dist/page.min.js',
        '/henryraccoon.github.io/assets/js/dist/post.min.js',
        '/henryraccoon.github.io/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

