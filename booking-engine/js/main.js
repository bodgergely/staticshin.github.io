$(function () {
    $('#check_in,#check_out,#f_check_in,#f_check_out').datetimepicker();
    $("#close").click(function(){
	$("#filter_container,#result_container").hide();
	$("#splash").show();
    });
    $("#search").click(function(){
	$("#splash").hide();
	$("#filter_container,#result_container").removeClass("hidden").show();
    });
});
