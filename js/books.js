$(document).ready(function(){


	$("#form").submit(function(){

		var search = $("#book").val();

		if (search == '') {

			alert ("Please enter something in the field to search.");

		}

	});

	return false;

});