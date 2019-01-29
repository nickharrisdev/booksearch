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
				
				// gets book info 

				for(i=0; i<response.items.length; i++) {

					title = $("<h5>" + response.items[i].volumeInfo.title + "</h5>");
					author = $("<h5>" + response.items[i].volumeInfo.authors + "</h5>");
					img = $("<img class='bookcover'><br><a href=" + response.items[i].volumeInfo.infoLink + "><button id='cover-button'>More info</button></a>")
					url = response.items[i].volumeInfo.imageLinks.thumbnail;

					img.attr("src", url); 

					title.appendTo("#results");

					author.appendTo("#results");
					
					img.appendTo("#results");
				}

			});

		}

	return false;

	});
});