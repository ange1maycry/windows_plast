(()=>{"use strict";(()=>{const e=document.querySelector("body"),t=document.querySelector(".header-modal--opened"),n=document.querySelector(".services-modal--opened"),o=document.querySelector(".overlay"),r=(e,t)=>{o.classList.toggle("overlay-open"),t.classList.toggle(e),o.style.transform="translateX(-100%)",t.style.transform="translate(-100%)";!function({timing:e,draw:t,duration:n}){let o=performance.now();requestAnimationFrame((function r(a){let s=(a-o)/n;s>1&&(s=1);let l=e(s);t(l),s<1&&requestAnimationFrame(r)}))}({duration:500,timing:e=>e,draw(e){t.style.transform=`translate(${(1e3*e-1e3)/2-50}%, ${(1e3*e-1e3)/2-50}%)`,o.style.transform=`translateX(${100*e-100}%)`}})};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".callTel")||e.target.matches(".header-modal__close")?r("header-modal",t):(e.target.matches(".modalCall")||e.target.matches(".services-modal__close"))&&r("services-modal",n)}))})(),(e=>{const t=document.querySelectorAll(".order"),n=function(e){return e<10?"0"+e:e},o=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:n(Math.floor(t/60/60/24)),hours:n(Math.floor(t/60/60)%24),minutes:n(Math.floor(t/60%60)),seconds:n(Math.floor(t%60))}},r=()=>{let e=o();t.forEach((t=>{const o=t.querySelector("div.count_1 span"),r=t.querySelector("div.count_2 span"),a=t.querySelector("div.count_3 span"),s=t.querySelector("div.count_4 span");e.timeRemaining<0?(o.textContent=n(0),r.textContent=n(0),a.textContent=n(0),s.textContent=n(0)):(o.textContent=e.days,r.textContent=e.hours,a.textContent=e.minutes,s.textContent=e.seconds)}))};o().timeRemaining>0&&setInterval(r,1e3),r()})("24 november 2021")})();