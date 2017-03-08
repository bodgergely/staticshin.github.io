$("a").click(function(){
    console.log("clicked");
    var url = $(this).attr('href');
    var id = url;
    console.log(id);

    change_color(id);
});

var change_color = function(id){
    $(id).css("background-color","yellow");
};

var url = document.URL;
var id = "#"+url.split("#")[1];

change_color(id);
