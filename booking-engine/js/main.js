$(function () {

    //email validator -- http://stackoverflow.com/questions/46155/validate-email-address-in-javascript

    var validateEmail =  function (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
    };
    
    // initialize date time plugin
    var today = Date.now();
    var tomorrow = moment().add(1, 'day').calendar(null,{nextDay:"L"}).toString();
    var init_ops = function(d_date){

	var date_pick_opts = {
	    defaultDate:d_date,
	    disabledDates:["02/14/2017"],
	    daysOfWeekDisabled:[6],
	    useCurrent:false
	};
	return date_pick_opts;
    };
    
    $('#check_in').datetimepicker(init_ops(today));
    $("#check_out").datetimepicker(init_ops(tomorrow));
    $("#check_in").on("dp.change", function (e) {
	console.log(e.date);
        $('#check_out').data("DateTimePicker").minDate(e.date);
    });    
    //close handler
    $("#close,#home").click(function(){
	$("#confirmed,#result_container,#error").hide();
	$("#splash").show();
    });
    
    //search handler
    $("#search").click(function(){
	var email = $("#email").val();
	var name = $("#f_name").val();
	console.log(name);
	console.log(email);
	if(!validateEmail(email) || name===""){
	    $("#error").removeClass("hidden").show();
	    return;
	}
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
	$("#booked").append("<li class='b_item'>"+name+" -- "+ curr
			    + price+" <span class='r_book' title='Remove' data-id='"+id+"'>[Remove]</li>");
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
