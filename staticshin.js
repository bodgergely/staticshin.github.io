(function(){var e=document.getElementById("more-menu"),t=document.getElementsByClassName("nav-grid")[0],n=["come_out.html","chaos_for_tenancy.html","tired_of_maintaining_books.html"],r=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},i=n[r(0,2)],s=$(".col-8-12").append("<div id='ad_div'></div>");e.onclick=function(){t.style.display==="none"?t.style.display="":t.style.display="none"},document.onkeydown=function(e){e.keyCode===27&&(t.style.display="none")},$("#ad_div").load("/ads/"+i,function(){console.log("ad is loaded")})})()