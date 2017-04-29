function checkSlide(){sliderImages.forEach(function(e){const i=window.scrollY+window.innerHeight-e.height/2,o=e.offsetTop+e.height,s=i>e.offsetTop,c=window.scrollY<o;s&&c?e.classList.add("active"):e.classList.remove("active")})}const sliderImages=document.querySelectorAll(".slide-in");window.addEventListener("scroll",checkSlide);
//# sourceMappingURL=app.js.map
