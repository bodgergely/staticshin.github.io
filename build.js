var buildify = require("buildify");
var scriptsPath = "./scripts/";
var fs = require("fs");

buildify.task({
    name:"css-min",
    task:function(){
	console.log("starting css compression....");
	buildify().concat([
	    "./simple_grid.css",
	    "./blog_styles.css"
	]).cssmin().save("./style.css");
	console.log("Completed css completion");
    }

});
