// Firebase link goes here?\

function searchBandsInTown(artist) {

var queryURL = "http://www.bandsintown.com/artist/" + artist + "?came_from=67";
$.ajax({
	url: queryURL,
	method: "GET"
}).done(function(response) {
	console.log(response);

var artistName = $("<h1>").text(response.name);
var artistURL = $("<a>").attr("href", response.url).append(artistName);
var artistImage = $("<img>").attr("src", response.thumb_url);
var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
var goToArtist = $("<a>").attr("href", response.url).text(" Upcoming Tour Dates");

	$("#artist-div").empty();
	$("#artist-div").append(artistURL, artistImage, upcomingEvents, goToArtist);

});
}

	$("#select-artist").on("click", function(event) {
		event.preventDefault();
var inputArtist = $("#artist-input").val().trim();

	searchBandsInTown(inputArtist);
});