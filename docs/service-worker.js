"use strict";var precacheConfig=[["/index.html","b2e797a01d7a155cd2c612d7fbf1a9c8"],["/static/css/main.113ecfa0.css","b1d74826530b7106942f8fb715afa2c6"],["/static/js/main.18eb5d01.js","e7d2bfaad82613dcd8931cff2a715f7a"],["/static/media/01.d23a45d6.jpg","d23a45d6fc41dd7ce8d246bc2958a56d"],["/static/media/02.bcff39b2.jpg","bcff39b23176bbf4373b4ae1eda4f1d7"],["/static/media/03.b370b134.jpg","b370b1345984065f711aeaa1e6d1930a"],["/static/media/04.b0836ea1.jpg","b0836ea1ce7fbebe259fec0db885f247"],["/static/media/05.16ea5a13.jpg","16ea5a13d3407b7a043c5fcfaaef567e"],["/static/media/06.ad96555c.jpg","ad96555c801dfd6c17064c93a30115a3"],["/static/media/07.ed174c71.jpg","ed174c717f5d9ce125ea9a2613d85ada"],["/static/media/08.da5e8d6d.jpg","da5e8d6d6da048408508210b61a3fb9c"],["/static/media/09.f37a7a8f.jpg","f37a7a8fb61b8712d38102dd774575f9"],["/static/media/10.e0aa4805.jpg","e0aa48054d43b46a88c3f44c88006a50"],["/static/media/dos-hero.fc3f5bad.png","fc3f5bad6e465c20aaf8bbfa7e2c8f02"],["/static/media/dos-previewImage.31c25b0b.png","31c25b0be0ceb13364b346aeaf411c28"],["/static/media/dos-tentacles-sm.d20e8fbe.png","d20e8fbe3629bc0ebf830eea09d3e58e"],["/static/media/dos-tentacles.f3430056.png","f34300565156a13d745b13f5213bead6"],["/static/media/page-background.5049755a.png","5049755aca60b459d0df0bab44735d71"],["/static/media/page-foreground.632304a4.png","632304a43cfb1875d8b7c8fb6020c790"],["/static/media/play-btn.7cdf700f.svg","7cdf700fbaee45aef05bb8c21250fd6a"],["/static/media/sonar.464f3388.gif","464f3388f10849aef4a75dba6ee9150f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});