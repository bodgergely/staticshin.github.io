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
	var price = $(this).data("price");
	var curr = $(this).data("curr");
	$("#booked").append("<p class='b_item'>"+name+" -- "+ curr + price+" <span class='r_book' data-id='"+id+"'>[X]</p>");
	$(this).prop('disabled','true');
    });
    
    $(document).on('click',".r_book",function(){
	var id  = $(this).data("id");
	console.log($("#"+id).find("button"));
	$(this).parent().html('');
	var button = $("#"+id).find("button");
	$(button).removeAttr('disabled');
    });
    
});
