(()=>{"use strict";var o=[{url:"assets/img/lord-earl-grey-1.webp",position:"50% 50%"},{url:"assets/img/lord-earl-grey-2.webp",position:"33.33% 33.33%"},{url:"assets/img/lord-earl-grey-3.webp",position:"66.66% 33.33%"},{url:"assets/img/lord-earl-grey-4.webp",position:"66.66% 33.33%"},{url:"assets/img/lord-earl-grey-5.webp",position:"50% 33.33%"}];o.forEach((function(o){(new Image).src=o.url}));var s=-1,e=!0,t=function(){e?(document.body.classList.remove("transition-all"),document.body.classList.add("transition-none"),e=!1):(document.body.classList.remove("transition-none"),document.body.classList.add("transition-all")),++s===o.length&&(s=0),document.body.style.backgroundImage="url("+o[s].url+")",document.body.style.backgroundPosition=o[s].position};t(),setInterval(t,5e3)})();