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

buildify.task({
    name:"js-min",
    task:function(){
	console.log("starting js compression....");
	buildify().load( "./staticshin_main.js").uglify().save("./staticshin.js");
	console.log("Completed js completion");
    }

});
