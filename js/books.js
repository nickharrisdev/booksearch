$(document).ready(function(){

	$("#form").submit(function(){

		var searchTerms = $("#book").val();

		if (searchTerms === '') {

			alert ("Please enter text into the search field.");

		} else {

			var title = "";
			var author = "";
			var img = "";
			var url = "";

			
			$.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerms, function(response){
				console.log(response);
				/*gets book title
				for(i=0; i<response.items.length; i++) {

					title = $("<h5>" + response.items[i].volumeInfo.title + "</h5>");

				} */

				

			});

		}

	return false;

	});
});