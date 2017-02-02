$(function () {
    // initialize date time plugin
    $('#check_in,#check_out,#f_check_in,#f_check_out').datetimepicker();
    
    //close handler
    $("#close").click(function(){
	$("#filter_container,#result_container").hide();
	$("#splash").show();
    });
    
    //search handler
    $("#search").click(function(){
	$("#splash").hide();
	$("#book_summary").hide();
	$("#filter_container,#result_container").removeClass("hidden").show();
    });
    
    //booking handler

    $(".book").click(function(){
	$("#book_summary").removeClass("hidden").show();
	var name = $(this).data("name");
	var id = $(this).data("id");
	$("#booked").append("<p class='b_item'>"+name+" <span class='r_book'>[X]</p>");
	console.log();
    });

    
});
