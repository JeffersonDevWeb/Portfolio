(()=>{"use strict";var e;!function(){const e=document.querySelector('[data-menu="menu"]'),t=document.querySelector('[data-menu="list"]'),n=["click","touchstart"];function o(){t.classList.add("ativo"),e.classList.add("ativo"),function(n,o,a){const r=document.documentElement,i="data-outside";function c(a){n.contains(a.target)||(n.removeAttribute(i),o.forEach((e=>{r.removeEventListener(e,c)})),t.classList.remove("ativo"),e.classList.remove("ativo"))}n.hasAttribute(i)||(o.forEach((e=>{setTimeout((()=>{r.addEventListener(e,c)}),0)})),n.setAttribute(i,""))}(t,n)}n.forEach((()=>e.addEventListener("click",o)))}(),function(){const e=document.querySelector(".light");document.querySelector(".grid-container").addEventListener("mousemove",(function(t){const n=document.documentElement.scrollTop;e.style.left=`${t.clientX}px`,e.style.top=`${t.clientY+n}px`,t.clientY+n>=2869?(e.classList.remove("lightout"),e.classList.add("blackout")):(e.classList.remove("blackout"),e.classList.add("lightout"))}))}(),function(){const e=document.querySelectorAll('[data-anime="scroll"]'),t=.6*window.innerHeight;function n(){e.forEach((e=>{e.getBoundingClientRect().top-t<0?e.classList.add("ativo"):e.classList.remove("ativo")}))}e.length&&(n(),window.addEventListener("scroll",n))}(),function(){if(document.querySelector(".proj").classList.contains("ativo")){const e=document.querySelector(".fly");e.innerHTML=e.textContent.replace(/\S/g,"<span>$&</span>"),anime.timeline({targets:".fly span",easing:"easeInOutExpo",loop:!1}).add({rotate:()=>anime.random(-360,360),translateX:()=>anime.random(-500,500),translateY:()=>anime.random(-500,500),duration:1e3,delay:anime.stagger(20)}).add({rotate:0,translateX:0,translateY:0,duration:5e3,delay:anime.stagger(20)})}}(),$((()=>{function e(){$(".projName").text($(".slick-center").data("name")),$(".projDesc").text($(".slick-center").data("desc"))}$(".carrossel").on("init",(()=>{e()})),$(".carrossel").slick({infinite:!0,centerMode:!0,centerPadding:"60px",slidesToShow:3,variableWidth:!0,prevArrow:$("#prev"),nextArrow:$(".next1"),responsive:[{breakpoint:708,settings:{arrows:!1,centerMode:!0,centerPadding:"10px",slidesToShow:3}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"10px",slidesToShow:1}}]}),$(".carrossel").on("afterChange",(()=>{e()}))})),function(){const e=document.querySelector(".final");let t=0;for(;t<5;){const n=document.createElement("i"),o=-40*Math.random(),a=5*Math.random;n.style.animationDelay=`${o}s`,n.style.animationDuration=`${a}s`,e.appendChild(n),t++}}(),function(){function e(e){e.preventDefault();const t=e.currentTarget.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('[data-anime="menu"] a[href^="#"]').forEach((t=>{t.addEventListener("click",e)}))}(),function(){const e=document.querySelector(".enviar"),t=document.querySelector("#enviar"),n=document.querySelector("#name"),o=document.querySelector("#email"),a=document.querySelector("#message");e.addEventListener("click",(function(){const e=n.value,r=o.value,i=a.value;t.href=`mailto:dalvatechnologies@gmail.com?subject=${e},%20${r}&body=${i}`}))}(),e={container:document.querySelector("#lottie"),renderer:"svg",loop:!1,autoplay:!0,path:"./img/D'alvaSVGOriginal.json"},lottie.loadAnimation(e)})();