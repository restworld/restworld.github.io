function t_menu__highlightActiveLinks(t){var e,n=window.location.href,o=window.location.pathname;"/"===n[n.length-1]&&(e=n.slice(0,-1)),"/"===o[o.length-1]&&(o=o.slice(0,-1)),"/"===o[0]&&(o=o.slice(1)),""===o&&(o="/");var i=document.querySelectorAll(t);Array.prototype.forEach.call(i,(function(t){var i=t.getAttribute("href");if(i){var r=t.href;r!==n&&r!==o&&i!==n&&i!==o&&e!==n&&e!==o||t.classList.add("t-active")}}))}function t_menu__findAnchorLinks(t,e){if(!(window.innerWidth<980)){var n=document.getElementById("rec"+t),o=e+'[href*="#"]:not(.tooltipstered)',i=n?n.querySelectorAll(o):[];i.length&&t_menu__updateActiveLinks(i,e)}}function t_menu__updateActiveLinks(t,e){var n=e.slice(2);n=".t"+(n=parseInt(n,10)),t=Array.prototype.slice.call(t);var o=null,i=[],r={};(t=t.reverse()).forEach((function(t){var e=t_menu__getSectionByHref(t);e&&e.id&&(i.push(e),r[e.id]=t)})),t_menu__updateSectionsOffsets(i),i.sort((function(t,e){var n=parseInt(t.getAttribute("data-offset-top"),10)||0;return(parseInt(e.getAttribute("data-offset-top"),10)||0)-n})),window.addEventListener("resize",t_throttle((function(){t_menu__updateSectionsOffsets(i)}),200));var a=document.querySelectorAll(n);Array.prototype.forEach.call(a,(function(t){t.addEventListener("displayChanged",(function(){t_menu__updateSectionsOffsets(i)}))})),setInterval((function(){t_menu__updateSectionsOffsets(i)}),5e3),t_menu__highlightNavLinks(t,i,r,o),t.forEach((function(e,n){e.addEventListener("click",(function(){var i=t_menu__getSectionByHref(e);!e.classList.contains("tooltipstered")&&i&&i.id&&(t.forEach((function(t,e){e===n?t.classList.add("t-active"):t.classList.remove("t-active")})),o=i.id)}))})),window.addEventListener("scroll",t_throttle((function(){o=t_menu__highlightNavLinks(t,i,r,o)}),100))}function t_menu__updateSectionsOffsets(t){t.forEach((function(t){var e=t.getBoundingClientRect().top+window.pageYOffset;t.setAttribute("data-offset-top",e.toString())}))}function t_menu__getSectionByHref(t){if(t){var e=t.getAttribute("href"),n=e?e.replace(/\s+/g,""):"";if(0===n.indexOf("/")&&(n=n.slice(1)),e&&t.matches('[href*="#rec"]'))return n=n.replace(/.*#/,""),document.getElementById(n);var o=e?e.trim():"",i=-1!==o.indexOf("#")&&o.indexOf("#");("number"==typeof i||"number"==typeof(i=-1!==o.indexOf("/")&&o.indexOf("/")))&&(o=o.slice(i+1));var r='.r[data-record-type="215"] a[name="'+o+'"]';return document.querySelector(r)?document.querySelector(r).closest(".r"):null}}function t_menu__highlightNavLinks(t,e,n,o){var i=window.pageYOffset,r=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),a=o,l=e.length?e[e.length-1]:null,c=l&&parseInt(l.getAttribute("data-offset-top"),10)||0;if(e.length&&null===o&&c>i+300)return t.forEach((function(t){t.classList.remove("t-active")})),null;for(var s=0;s<e.length;s++){var u=e[s].getAttribute("data-offset-top"),f=e[s].id?n[e[s].id]:null;if(i+300>=u||0===s&&i>=r-window.innerHeight){null===o&&f&&!f.classList.contains("t-active")?(t.forEach((function(t){t.classList.remove("t-active")})),f&&f.classList.add("t-active"),a=null):null!==o&&e[s].id&&o===e[s].id&&(a=null);break}}return a}function t_menu__setBGcolor(t,e){var n=document.querySelectorAll(e);Array.prototype.forEach.call(n,(function(t){window.innerWidth>980?"yes"===t.getAttribute("data-bgcolor-setbyscript")&&(t.style.backgroundColor=t.getAttribute("data-bgcolor-rgba")):(t.style.backgroundColor=t.getAttribute("data-bgcolor-hex"),t.setAttribute("data-bgcolor-setbyscript","yes"),t.style.transform&&(t.style.transform=""),t.style.opacity&&(t.style.opacity=""))}))}function t_menu__showFixedMenu(t,e){var n=[".t280",".t282",".t450",".t451",".t466",".t453"].some((function(t){return t===e}));if(!(window.innerWidth<=980)||n){var o=document.getElementById("rec"+t);if(!o)return!1;var i=o.querySelectorAll(e);Array.prototype.forEach.call(i,(function(t){var e=t.getAttribute("data-appearoffset");if(e){-1!==e.indexOf("vh")&&(e=Math.floor(window.innerHeight*(parseInt(e)/100))),e=parseInt(e,10);var n=t.clientHeight;"number"==typeof e&&window.pageYOffset>=e?t.style.transform==="translateY(-"+n+"px)"&&t_menu__slideElement(t,n,"toBottom"):"translateY(0px)"===t.style.transform?t_menu__slideElement(t,n,"toTop"):(t.style.transform="translateY(-"+n+"px)",t.style.opacity="0")}}))}}function t_menu__changeBgOpacity(t,e){var n=["t280","t282","t451","t466"].some((function(t){return-1!==e.indexOf(t)}));if(!(window.innerWidth<=980)||n){var o=document.getElementById("rec"+t);if(!o)return!1;var i=o.querySelectorAll(e);Array.prototype.forEach.call(i,(function(t){var e=t.getAttribute("data-bgcolor-rgba"),n=t.getAttribute("data-bgcolor-rgba-afterscroll"),o=t.getAttribute("data-bgopacity"),i=t.getAttribute("data-bgopacity-two"),r=t.getAttribute("data-menushadow")||"0",a="100"===r?r:"0."+r;t.style.backgroundColor=window.pageYOffset>20?n:e,window.pageYOffset>20&&"0"===i||window.pageYOffset<=20&&"0.0"===o||" "===r?t.style.boxShadow="none":t.style.boxShadow="0px 1px 3px rgba(0,0,0,"+a+")"}))}}function t_menu__createMobileMenu(t,e){var n=document.getElementById("rec"+t);if(n){var o=n.querySelector(e),i=n.querySelector(e+"__mobile"),r=i||n.querySelector(".tmenu-mobile"),a=i?e.slice(1)+"_opened":"tmenu-mobile_opened";r&&r.addEventListener("click",(function(){if(r.classList.contains(a))t_menu__FadeOut(o,300),r.classList.remove(a);else if(t_menu__fadeIn(o,300,(function(){o.style.transform&&(o.style.transform=""),o.style.opacity&&(o.style.opacity="")})),r.classList.add(a),o.classList.contains("tmenu-mobile__menucontent_fixed")){var n=getComputedStyle(r).height;o.style.top=n}t_menu_checkOverflow(t,e)})),window.innerWidth<980&&n.addEventListener("click",(function(n){if(o&&o.classList.contains("tmenu-mobile__menucontent_fixed")){var i=n.target.closest(".t-menu__link-item, .t978__submenu-link, .t966__menu-link, .t-menusub__link-item");i&&(["t978__menu-link_hook","t978__tm-link","t966__tm-link","t794__tm-link","t-menusub__target-link"].some((function(t){return i.classList.contains(t)}))?setTimeout((function(){t_menu_checkOverflow(t,e)}),300):(t_menu__FadeOut(o,300),r&&r.classList.remove(a)))}})),window.addEventListener("resize",t_throttle((function(){window.innerWidth>980&&(o&&(o.style.opacity=""),o&&(o.style.display=""),r&&r.classList.remove(a)),t_menu_checkOverflow(t,e)}),200))}}function t_menu_checkOverflow(t,e){var n=document.getElementById("rec"+t),o=n?n.querySelector(e):null;if(o){var i=(n.querySelector(e+"__mobile")||n.querySelector(".tmenu-mobile")).offsetHeight,r=document.documentElement.clientHeight,a=o.style.position||window.getComputedStyle(o).position,l=o.offsetHeight;"fixed"===a&&l>r-i&&(o.style.overflow="auto",o.style.maxHeight="calc(100% - "+i+"px)")}}function t_menu__FadeOut(t,e,n){if(!t)return!1;var o=1;e=parseInt(e,10);var i=setInterval((function(){t.style.opacity=o,(o-=.1)<=.1&&(t.style.opacity="0",t.style.display="none","function"==typeof n&&n(),clearInterval(i))}),e>0?e/10:40)}function t_menu__fadeIn(t,e,n){if(!t)return!1;if(("1"===getComputedStyle(t).opacity||""===getComputedStyle(t).opacity)&&"none"!==getComputedStyle(t).display)return!1;var o=0,i=(e=parseInt(e,10))>0?e/10:40;t.style.opacity=o,t.style.display="block";var r=setInterval((function(){t.style.opacity=o,(o+=.1)>=1&&(t.style.opacity="1","function"==typeof n&&n(),clearInterval(r))}),i)}function t_menu__slideElement(t,e,n){var o="toTop"===n?0:e,i="toTop"===n?1:0,r=setInterval((function(){t.style.transform="translateY(-"+o+"px)",t.style.opacity=i.toString(),i="toTop"===n?i-.1:i+.1,o="toTop"===n?o+e/20:o-e/20,"toTop"===n&&o>=e&&(t.style.transform="translateY(-"+e+"px)",t.style.opacity="0",clearInterval(r)),"toBottom"===n&&o<=0&&(t.style.transform="translateY(0px)",t.style.opacity="1",clearInterval(r))}),10)}