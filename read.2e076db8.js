!function(){var e=document.querySelector(".theme-switch__checkbox"),t=document.querySelector("body");e.addEventListener("change",(function(){t.classList.toggle("theme-dark"),"theme-dark"!==localStorage.getItem("theme")?localStorage.setItem("theme","theme-dark"):localStorage.removeItem("theme")})),"theme-dark"===localStorage.getItem("theme")?(t.classList.add("theme-dark"),e.checked=!0):e.checked=!1;var n=Array.from(document.querySelectorAll(".nav-list__link")),r=window.location.href;function a(){for(var e=document.getElementsByClassName("revision-date-btn"),t=0;t<e.length;t++)e[t].addEventListener("click",(function(){this.classList.toggle("active-revision-date");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))}n.map((function(e){var t=e.innerHTML.toLowerCase();r.includes(t)?e.classList.add("current"):e.classList.remove("current")}));var o=document.querySelector(".revision-date-container");window.addEventListener("DOMContentLoaded",(function(){for(var e=0;e<localStorage.length;e++){var t=localStorage.key(e);"favorite"!==t&&o.insertAdjacentHTML("afterbegin",'<div>\n        <button type="button" class="revision-date-btn">'.concat(t,'\n          <svg class="icon-arrow">\n            <use href="./images/arrow.svg#icon-arrow"></use>\n          </svg>\n        </button>\n        <ul class="container-for-viewed-cards">\n        </ul>\n        </div>'));var n=document.querySelector(".container-for-viewed-cards");try{var r=JSON.parse(localStorage.getItem(t)).reduce((function(e,t){return e+t.markup}),"");n.insertAdjacentHTML("afterbegin",r)}catch(e){console.log("LocalStorage is empty!")}}a()}))}();
//# sourceMappingURL=read.2e076db8.js.map