(()=>{"use strict";var s=[{url:"assets/img/lord-earl-grey-1.webp",position:"50% 50%"},{url:"assets/img/lord-earl-grey-2.webp",position:"33.33% 33.33%"},{url:"assets/img/lord-earl-grey-3.webp",position:"50% 33.33%"},{url:"assets/img/lord-earl-grey-4.webp",position:"66.66% 33.33%"},{url:"assets/img/lord-earl-grey-5.webp",position:"50% 33.33%"},{url:"assets/img/lord-earl-grey-6.webp",position:"33.33% 33.33%"}];s.forEach((function(s){(new Image).src=s.url}));var o=-1,e=!0,r=function(){e?(document.body.classList.remove("transition-all"),document.body.classList.add("transition-none"),e=!1):(document.body.classList.remove("transition-none"),document.body.classList.add("transition-all")),++o===s.length&&(o=0),document.body.style.backgroundImage="url("+s[o].url+")",document.body.style.backgroundPosition=s[o].position};r(),setInterval(r,5e3)})();