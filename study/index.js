$("a").click(function(){
    $(".yellow").removeClass("yellow");
    console.log("clicked");
    var url = $(this).attr('href');
    var split = url.split("#");
    var id = split[1];
    change_color("#"+id);
    
});

var change_color = function(id){
    $(id).addClass("yellow");
};

var url = document.URL;
var id = "#"+url.split("#")[1];
change_color(id);
