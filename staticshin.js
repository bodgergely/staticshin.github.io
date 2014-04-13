(function(){
    var moreMenu = document.getElementById("more-menu");
    var menuGrid = document.getElementsByClassName("nav-grid")[0];
    
    moreMenu.onclick = function(){
	menuGrid.style.display ==='none' ?
	    menuGrid.style.display =  '': menuGrid.style.display = "none";  
    };
    document.onkeydown = function(event){
	if(event.keyCode===27){
	    menuGrid.style.display="none";
	}
    };
})();
