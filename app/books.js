//---initial refactor---//

var title = "";
var author = "";
var publisher = "";
var img = "";
var url = "";


function init () {

	$("#form").submit(function(){

		var searchTerms = $('#book').val();

		if (searchTerms === '') {

			alert ("Please enter text into the search field.");

		} else {

			///call a function to retrieve book info from google
			getBookinfo(searchTerms);

		}

	return false;

	});
}

function getBookinfo(searchTerms) {
			
	$.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerms, function(response){
		//log the response as a test
		console.log(response);

		// for loop to get relevant book info from JSON file
		for(i=0; i<response.items.length; i++) {

			title = $("<h3>" + response.items[i].volumeInfo.title + "</h3>");
			author = $("<h5>Author(s): " + response.items[i].volumeInfo.authors + " </h5>");
			publisher = $("<h5>Publisher: " + response.items[i].volumeInfo.publisher + "</h5>");
			img = $("<img class='bookcover'><br><a href=" + response.items[i].volumeInfo.infoLink + "><button id='cover-button'>More Info</button></a>")
			url = response.items[i].volumeInfo.imageLinks.thumbnail;

			//call function to append 
			appendResults();

		}
	});
}

function appendResults() {
	
	img.attr("src", url); 

	title.appendTo("#results");

	author.appendTo("#results");

	publisher.appendTo("#results");
					
	img.appendTo("#results");

}

//clear results functionality
function clearResults() {
	$(".clear-search").on("click", function() {
		$("#results").html("");
		$("#book").val("");
	});

	$("#book").focus(function() {
		$("#results").html("");
	});

	$("#book").keypress(function() {
		$("#results").html("");
	});
}



clearResults();
init();


