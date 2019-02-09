$(document).ready(function(){

	$("#form").submit(function(){

		var searchTerms = $("#book").val();

		if (searchTerms === '') {

			alert ("Please enter text into the search field.");

		} else {

			var title = "";
			var author = "";
			var publisher = "";
			var img = "";
			var url = "";

			
			$.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerms, function(response){
				console.log(response);
				
				// for loop to get relevant book info from JSON file

				for(i=0; i<response.items.length; i++) {

					title = $("<h3>" + response.items[i].volumeInfo.title + "</h3>");
					author = $("<h5>Author(s): " + response.items[i].volumeInfo.authors + " </h5>");
					publisher = $("<h5>Publisher: " + response.items[i].volumeInfo.publisher + "</h5>");
					img = $("<img class='bookcover'><br><a href=" + response.items[i].volumeInfo.infoLink + "><button id='cover-button'>More info</button></a>")
					url = response.items[i].volumeInfo.imageLinks.thumbnail;
					

					//adds the newly found data to results section 

					img.attr("src", url); 

					title.appendTo("#results");

					author.appendTo("#results");

					publisher.appendTo("#results");
					
					img.appendTo("#results");

				}

			});

		}

	return false;

	});
});