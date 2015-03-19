(function(){
    var moreMenu = document.getElementById("more-menu");
    var menuGrid = document.getElementsByClassName("nav-grid")[0];
    var ads = ["come_out.html","chaos_for_tenancy.html","tired_of_maintaining_books.html"];
    var random_ad =   function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var ad = ads[random_ad(0,2)];
    var ad_column = $(".col-8-12").append("<div id='ad_div'></div>");
   
    moreMenu.onclick = function(){
	menuGrid.style.display ==='none' ?
	    menuGrid.style.display =  '': menuGrid.style.display = "none";  
    };
    document.onkeydown = function(event){
	if(event.keyCode===27){
	    menuGrid.style.display="none";
	}
    };
    
    $("#ad_div").load("/ads/"+ad,function(){
	console.log("ad is loaded");
    });
})();
