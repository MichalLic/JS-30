function fixNav(){window.scrollY>=topOfNav?(body.addClass("fixed-nav"),body.css("padding-top",navHeight)):(body.removeClass("fixed-nav"),body.css("padding-top",0))}var nav=$("nav"),body=$("body"),topOfNav=nav.offset().top,navHeight=nav.height();window.addEventListener("scroll",fixNav);
//# sourceMappingURL=app.js.map
