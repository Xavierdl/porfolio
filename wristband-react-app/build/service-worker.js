"use strict";var precacheConfig=[["/index.html","43c0b99813402582febe54ea9d8a17e6"],["/static/js/main.0e3a5fcf.js","101ded8011de9bb68363924706058d48"],["/static/media/Bracelet-black.599b33a1.svg","599b33a19a7fed91d415d38908fcd65c"],["/static/media/Etoile-green.94749b16.svg","94749b16c0e89981042ce64cb6f75332"],["/static/media/achat-white.1d301ef9.svg","1d301ef93e4e7e0c67d2b6d1d372c904"],["/static/media/add-fund-retrieve.2fa9b2bf.svg","2fa9b2bf4a4470f08e4d5f775d365d90"],["/static/media/bracelet.90a26c91.svg","90a26c91863c6ea8530c174a04b9d77f"],["/static/media/btn-close-accueil.44b75004.svg","44b7500404db3e556095a92d76ee5c1d"],["/static/media/carte-green.2c7287af.svg","2c7287af1b52c2013693593c2a885b14"],["/static/media/carte-white.eb4fd2ea.svg","eb4fd2ea23ea44481923d47f2b6086dd"],["/static/media/cash-green.50166469.svg","50166469aa5e91596089de418aaf67bd"],["/static/media/cash-white.3dd5b19e.svg","3dd5b19ee8b04fde663e4eba0fe2053f"],["/static/media/coordonnees-red.ee230965.svg","ee230965104a6debead98f3ebbe3046f"],["/static/media/error-red.7d86a3f0.svg","7d86a3f0fb4d341e054d625a8c4ca4f9"],["/static/media/food.a2318baf.svg","a2318bafae284ec424de974a8b59a88f"],["/static/media/link-card.717488a6.svg","717488a6f8c2748e8dc19bf75f1b7086"],["/static/media/link-cash.49857c72.svg","49857c72b44e935312fb0af9f9cedbb4"],["/static/media/logo.1f60e2e9.png","1f60e2e958df9dcf358f9dd0d55f70e1"],["/static/media/paid1.8644a59e.svg","8644a59ece98e41377d0b4c7040dd024"],["/static/media/recuperer.87981882.svg","8798188286fc37818a8764f772816c63"],["/static/media/remplir-white.31c66428.svg","31c66428178e399f0cdde8e825360437"],["/static/media/shop.de999c74.svg","de999c744708b4069f18d69b8ff03ec0"],["/static/media/solde.303faa5e.svg","303faa5e7ee772fa8cbfe02613fa5e58"],["/static/media/step1.19546503.svg","19546503b1f65f549807d94ccb9af12a"],["/static/media/step2.a472d85c.svg","a472d85ccd4a73b379f040fc2b3ce3d4"],["/static/media/step3.63df9325.svg","63df9325ee3682b61e3b22c12107b898"],["/static/media/step4.8084e7f9.svg","8084e7f948808e652821eeeb2c55ad0a"],["/static/media/step5.11f7a7fb.svg","11f7a7fb3f83b810297af343b66a18c8"],["/static/media/tShirt.7ad19d04.svg","7ad19d0482b60b011aa8a1fcca8b9f34"],["/static/media/video.171127fc.mp4","171127fc6c873f70b1b1acd9365e8633"],["/static/media/wallet-to-wristband.81abbf8c.svg","81abbf8c88b6d04a70ae05de62fc231a"],["/static/media/wristband-end.caa92b66.svg","caa92b661f6da74612cc1ab39168e6d8"],["/static/media/wristband-printed.0a1faba7.svg","0a1faba7a28bb2ec2675edd15e107231"],["/static/media/wristband-retrieving.149937bd.svg","149937bda05cbe2e3103626653b20419"],["/static/media/wristband-tap.4f20b3f1.svg","4f20b3f157da70eb96b9517e75289b40"],["/static/media/write-white.a8320b6b.svg","a8320b6b12f29b2667c6d34b7acd88eb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var s="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});