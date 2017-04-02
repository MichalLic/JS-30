$(document).ready(function(){window.addEventListener("keydown",function(e){var a=$("audio[data-key="+e.keyCode+"]"),d=$(".key[data-key="+e.keyCode+"]"),n=a[0],o=d[0],i=n.src;new Audio(i).play(),o.classList.add("playing"),setTimeout(function(){d.removeClass("playing")},100)})});
//# sourceMappingURL=app.js.map
