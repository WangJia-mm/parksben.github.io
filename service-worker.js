"use strict";var precacheConfig=[["/index.html","f48fdff97826709faf4a7cb0bc658fb7"],["/static/css/main.aef2dd0f.css","0e0492d1739968e2af80b4961986d5b2"],["/static/js/main.5736508a.js","532e8d291499f7e4d1523f88f5d6c674"],["/static/media/article.acf4c369.md","acf4c3691cbf6dcac283f41b760170e6"],["/static/media/article.bf333c34.md","bf333c34bbf8190377c843267adac49c"],["/static/media/article.c0dd47c8.md","c0dd47c80fcbffe09387e15e35893a04"],["/static/media/article.de9e3401.md","de9e3401126e164bafdbb47a80767707"],["/static/media/article.e25adf22.md","e25adf2210ea0adc5fd801c459e6d3b1"],["/static/media/article.e8c89e6d.md","e8c89e6dc25ec82ed15df9048ee0691a"],["/static/media/article.ff5145d1.md","ff5145d10cb1d1801b5cc0763f054f23"],["/static/media/side_bg.eb51da5c.jpg","eb51da5ca333e34f6564f43ab80c356e"],["/static/media/thumb.2159b07a.jpg","2159b07ae72ff6fdfc6dab3f9b31b6e7"],["/static/media/thumb.5d3baf1a.jpg","5d3baf1a82f2993096be1bd8439288bb"],["/static/media/thumb.7892d7dc.jpg","7892d7dca86b41dd5a7ed838f99e0fad"],["/static/media/thumb.a7a93d6b.jpg","a7a93d6b208b6c9c0bec16c1e23041ab"],["/static/media/thumb.d371b163.jpg","d371b16395ca45211291e903e357f892"],["/static/media/thumb.e843554d.jpg","e843554ddca2252ebd2a3dca5e7c1c74"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});