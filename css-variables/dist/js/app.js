var inputs=$(".single-control input");inputs.on("change",function(){var i=this.dataset.sizing||"";$("body").css("--"+this.id,this.value+i)}),inputs.on("mousemove",function(){var i=this.dataset.sizing||"";$("body").css("--"+this.id,this.value+i)});
//# sourceMappingURL=app.js.map
