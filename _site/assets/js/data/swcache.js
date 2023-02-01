const resource = [
    /* --- CSS --- */
    '/testttweb/assets/css/style.css',

    /* --- PWA --- */
    '/testttweb/app.js',
    '/testttweb/sw.js',

    /* --- HTML --- */
    '/testttweb/index.html',
    '/testttweb/404.html',

    
        '/testttweb/about/',
    
        '/testttweb/categories/',
    
        '/testttweb/tags/',
    
        '/testttweb/archives/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/testttweb/assets/img/favicons/android-chrome-192x192.png',
        '/testttweb/assets/img/favicons/android-chrome-512x512.png',
        '/testttweb/assets/img/favicons/apple-touch-icon.png',
        '/testttweb/assets/img/favicons/favicon-16x16.png',
        '/testttweb/assets/img/favicons/favicon-32x32.png',
        '/testttweb/assets/img/favicons/favicon.ico',
        '/testttweb/assets/img/favicons/mstile-150x150.png',
        '/testttweb/assets/js/dist/categories.min.js',
        '/testttweb/assets/js/dist/commons.min.js',
        '/testttweb/assets/js/dist/home.min.js',
        '/testttweb/assets/js/dist/misc.min.js',
        '/testttweb/assets/js/dist/page.min.js',
        '/testttweb/assets/js/dist/post.min.js',
        '/testttweb/assets/js/dist/pvreport.min.js'
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

