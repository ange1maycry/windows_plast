(()=>{"use strict";(()=>{const e=document.querySelector("body"),t=document.querySelector(".header-modal--opened"),a=document.querySelector(".services-modal--opened"),l=document.querySelector(".overlay"),o=(e,t)=>{l.classList.toggle("overlay-open"),t.classList.toggle(e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".callTel")||e.target.matches(".header-modal__close")?o("header-modal",t):(e.target.matches(".modalCall")||e.target.matches(".services-modal__close"))&&o("services-modal",a)}))})()})();