var url = document.URL;
var id = "#"+url.split("#")[1];
console.log(id);
$(id).css("background-color","yellow");
