(()=>{"use strict";(()=>{const e=document.querySelector("body"),t=document.querySelector(".header-modal--opened"),o=document.querySelector(".services-modal--opened"),n=document.querySelector(".overlay"),r=(e,t)=>{n.classList.toggle("overlay-open"),t.classList.toggle(e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".callTel")||e.target.matches(".header-modal__close")?r("header-modal",t):(e.target.matches(".modalCall")||e.target.matches(".services-modal__close"))&&r("services-modal",o)}))})(),(e=>{const t=document.querySelectorAll(".order"),o=function(e){return e<10?"0"+e:e},n=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:o(Math.floor(t/60/60/24)),hours:o(Math.floor(t/60/60)%24),minutes:o(Math.floor(t/60%60)),seconds:o(Math.floor(t%60))}},r=()=>{let e=n();t.forEach((t=>{const n=t.querySelector("div.count_1 span"),r=t.querySelector("div.count_2 span"),a=t.querySelector("div.count_3 span"),c=t.querySelector("div.count_4 span");e.timeRemaining<0?(n.textContent=o(0),r.textContent=o(0),a.textContent=o(0),c.textContent=o(0)):(n.textContent=e.days,r.textContent=e.hours,a.textContent=e.minutes,c.textContent=e.seconds)}))};n().timeRemaining>0&&setInterval(r,1e3),r()})("24 november 2021")})();