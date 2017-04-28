const pressed=[],secretCode="secret";window.addEventListener("keyup",function(e){pressed.push(e.key),console.log(pressed),pressed.splice(-"secret".length-1,pressed.length-"secret".length),pressed.join("").includes("secret")&&console.log("There is secret word!")});
//# sourceMappingURL=app.js.map
