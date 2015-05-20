(function(){
    var moreMenu = document.getElementById("more-menu");
    var menuGrid = document.getElementsByClassName("nav-grid")[0];
    var ads = ["come_out.html",
	       "chaos_for_tenancy.html",
	       "tired_of_maintaining_books.html",
	       "for-tenants-overseas.html","easy_being_a_landlord.html",
	      "sherlock_holmes_tenant.html"];
    var random_ad =   function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var ad = ads[random_ad(0,5)];
   $("#more-menu").click(function(){
	menuGrid.style.display ==='none' ?
	    menuGrid.style.display =  '': menuGrid.style.display = "none";  
    });
    document.onkeydown = function(event){
	if(event.keyCode===27){
	    menuGrid.style.display="none";
	}
    };
    if( !$('#ad_div').length){
	var ad_container = '<div class="grid grid-pad"><div id="container" class="col-8-12 push-2-12"></div></div>';
	var ad_column = $(".col-8-12").append(ad_container);	
	$("#container").load("/ads/"+ad);
    }
    if($("#ad_div").length){
	$("#ad_div").load("/ads/"+ad);
    }
})();
