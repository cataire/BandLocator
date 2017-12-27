// Eric Goldstein, Karen Gertenbach, Maria Kuznetsova, Jeffrey Phelps - 
// DU Web Dev Bootcamp 2017/2018 - Week-8 Homework - Project 1
$(document).ready(function() {

  //add div for map
  //get bands in town artist info
  //get events locations
  //populate map with markers

	 $("#addTopic").on('click', function(event){
	 	event.preventDefault();
	 	var artistName = $("#userSearch").val();

	 	var queryURL = "https://rest.bandsintown.com/artists/" + artistName + "?app_id=codingbootcamp";
	 	$.ajax({
	 	url: queryURL,
	 	method: "GET"
	 	}).done(function(response){
	 		console.log(response);
	 	})
	 })

 }); //doc ready closing
    
    

