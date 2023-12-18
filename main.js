(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"body {\n    margin: 0;\n    color: white;\n    background-color: rgb(34, 34, 34);\n}\n\n#header>h1 {\n    text-align: center;\n}\n\n#header, #nav {\n    background-color: rgb(34, 34, 34);\n}\n\n#nav {\n    display: grid;\n    grid-template-columns: repeat(3, 120px);\n    justify-content: center;\n    text-align: center;\n    gap: 25px;\n}\n\n.navbtn {\n    cursor: pointer;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n}\n\n.navbtn::first-letter {\n    text-transform: capitalize;\n}\n\n.navbtn:hover {\n    transition: 0.1s;\n    font-size: 1.1rem;\n}\n\n.selectedTab {\n    background-color: rgb(97, 97, 97);\n}\n\n#mainContainer {\n    display: grid;\n    grid-template-rows: 60px 80px 1200px;\n}\n\n#backimg {\n    width: 100%;\n    height: auto;\n    position: absolute;\n    z-index: -1;\n    top: 140px;\n}\n\n#content {\n    margin-top: 50px;\n    background-color: rgba(27, 27, 27, 0.6);\n    width: 60%;\n    justify-self: center;\n    position: relative;\n}\n\n#footer {\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n}",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),d=0;d<a.length;d++){var l=n(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=(h=document,{blankSlate:function(){const t=h.getElementById("content");for(;t.firstChild;)t.removeChild(t.firstChild);const e=Array.from(h.querySelectorAll(".navbtn"));console.log(e),e.forEach((t=>t.classList.remove("selectedTab")))}});var h;const b=function(t){return{homeBuilder:function(){v.blankSlate(),t.getElementById("content"),t.getElementById("hometab").classList.add("selectedTab"),t.getElementById("content").textContent="HOME"}}}(document),g=function(t){return{menuBuilder:function(){v.blankSlate(),t.getElementById("content").textContent="MENU"}}}(document),y=function(t){return{contactBuilder:function(){v.blankSlate(),t.getElementById("content").textContent="CONTACT"}}}(document);!function(t){const e=t.getElementById("mainContainer"),n=t.createElement("div"),r=t.createElement("div"),o=t.createElement("img"),a=t.createElement("div");n.setAttribute("id","header"),r.setAttribute("id","nav"),o.setAttribute("src","./womaneatingfood.jpg"),o.setAttribute("id","backimg"),o.setAttribute("alt","Woman eating food in a restraurant"),a.setAttribute("id","content");const i=t.createElement("h1");function c(e,n){const o=t.createElement("div");o.setAttribute("id",e+"tab"),o.classList.add("navbtn");const a=t.createElement("h2");a.textContent=e,o.appendChild(a),r.appendChild(o),o.addEventListener("click",n)}i.textContent="Fancy Pants Restaurant",n.appendChild(i),c("home",b.homeBuilder),c("menu",g.menuBuilder),c("contact",y.contactBuilder),a.textContent="HELLO",e.appendChild(n),e.appendChild(r),e.appendChild(o),e.appendChild(a)}(document),console.log("Is there anybody out there?"),b.homeBuilder()})()})();