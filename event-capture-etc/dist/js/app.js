function logText(o){o.stopPropagation(),console.log(this.classList.value)}const divs=document.querySelectorAll("div");divs.forEach(function(o){o.addEventListener("click",logText,{capture:!1})});
//# sourceMappingURL=app.js.map
