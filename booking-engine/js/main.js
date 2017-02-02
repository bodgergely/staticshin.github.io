$(function () {
    // initialize date time plugin
    $('#check_in,#check_out,#f_check_in,#f_check_out').datetimepicker();
    
    //close handler
    $("#close,#home").click(function(){
	$("#confirmed,#result_container").hide();
	$("#splash").show();
    });
    
    //search handler
    $("#search").click(function(){
	$("#splash,#confirmed,#book_summary").hide();
	$("button").removeAttr("disabled");
	$("#booked").html("");
	$("#total").text("0");
	$("#result_container").removeClass("hidden").show();
    });
    
    //booking handler

    $(".book").click(function(){
	$("#book_summary").removeClass("hidden").show();
	var name = $(this).data("name");
	var id = $(this).data("id");
	var price = parseInt($(this).data("price"));
	var curr = $(this).data("curr");
	var total = parseInt($("#total").text());
	total = total+price;
	$("#booked").append("<li class='b_item'>"+name+" -- "+ curr + price+" <span class='r_book' title='Remove' data-id='"+id+"'>[Remove]</li>");
	$(this).prop('disabled','true');
	$("#curr").text(curr);
	$("#total").text(total);
    });
    
    $(document).on('click',".r_book",function(){
	var id  = $(this).data("id");
	var button = $("#"+id).find("button");
	var price = parseInt($(button).data("price"));
	var curr = $(this).data("curr");
	var total = parseInt($("#total").text());
	total = total - price;
	$("#curr").text(curr);
	$("#total").text(total);
	$(this).parent().remove();
	if($("#booked").html()===''){
	    $("#book_summary").hide();
	}
	$(button).removeAttr('disabled');
    });

    $(document).on('click','#confirm',function(){
	$("#result_container").hide();
	$("#confirmed").removeClass("hidden").show();
    });
    
});
