!function(){function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r.register("cs7FV",(function(e,t){var o=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),l=r("gnsaF"),d=function(){var e="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!e),o.classList.toggle("is-open"),l[e?"enableBodyScroll":"disableBodyScroll"](document.body)},c=document.querySelector('meta[name="description"]').content.toLowerCase();document.querySelectorAll(".nav-mobile__link").forEach((function(e){e.innerText.toLowerCase()===c&&e.classList.add("nav-mobile__link--current")})),n.addEventListener("click",d),i.addEventListener("click",d)})),r.register("gnsaF",(function(t,o){e(t.exports,"disableBodyScroll",(function(){return g})),e(t.exports,"clearAllBodyScrollLocks",(function(){return p})),e(t.exports,"enableBodyScroll",(function(){return h}));var n=!1;if("undefined"!=typeof window){var r={get passive(){n=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),l=[],d=!1,c=-1,u=void 0,a=void 0,s=void 0,m=function(e){return l.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},f=function(e){var t=e||window.event;return!!m(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},v=function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==u&&(document.body.style.overflow=u,u=void 0)},y=function(){if(void 0!==a){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=a.position,document.body.style.top=a.top,document.body.style.left=a.left,window.scrollTo(t,e),a=void 0}},g=function(e,t){if(e){if(!l.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};l=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(l),[o]),i?window.requestAnimationFrame((function(){if(void 0===a){a={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===s){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);s=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===u&&(u=document.body.style.overflow,document.body.style.overflow="hidden")}(t),i&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-c;!m(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?f(e):e.stopPropagation())}(t,e)},d||(document.addEventListener("touchmove",f,n?{passive:!1}:void 0),d=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},p=function(){i&&(l.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),d&&(document.removeEventListener("touchmove",f,n?{passive:!1}:void 0),d=!1),c=-1),i?y():v(),l=[]},h=function(e){e?(l=l.filter((function(t){return t.targetElement!==e})),i&&(e.ontouchstart=null,e.ontouchmove=null,d&&0===l.length&&(document.removeEventListener("touchmove",f,n?{passive:!1}:void 0),d=!1)),i?y():v()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}})),r.register("i9h7m",(function(e,t){var o=document.querySelector(".theme-switch__checkbox"),n=document.querySelector(".theme-switch-mobile");function r(e){localStorage.setItem("theme",e),document.documentElement.className=e}o.addEventListener("change",(function(){"theme-dark"===localStorage.getItem("theme")?r("theme-light"):r("theme-dark")})),n.addEventListener("change",(function(){"theme-dark"===localStorage.getItem("theme")?r("theme-light"):r("theme-dark")}))}))}();
//# sourceMappingURL=index.4cdd326f.js.map
