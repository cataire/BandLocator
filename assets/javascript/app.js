// Eric Goldstein, Karen Gertenbach, Maria Kuznetsova, Jeffrey Phelps - 
// DU Web Dev Bootcamp 2017/2018 - Week-8 Homework - Project 1
$(document).ready(function() {

    var searchedArtist = [];
    
         function displaySearch() {
    
        var userSearch = $(this).data("search");
        console.log(userSearch);
    
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=dc6zaTOxFJmzC&limit=5";
        http://api.musicgraph.com/api/v2/artist/suggest?api_key=c8303e90962e3a5ebd5a1f260a69b138&prefix=gree&limit=3
        console.log(queryURL);
    
        $.ajax({
              url: queryURL,
              method: "GET"
            }).done(function(response) {
                var results = response.data;
                console.log(results);
                for (var i = 0; i < results.length; i++) {
                
                var UserDiv = $("<div class='col-md-4'>");
    
                var rating = results[i].rating;
                var defaultAnimatedSrc = results[i].images.fixed_height.url;
                var giphyImage = $("<img>");
                var text = $("<p>").text("Rating: " + rating);
                var staticSrc = results[i].images.fixed_height_still.url;
    
                giphyImage.attr("src", staticSrc);
                giphyImage.addClass("userSearchImage");
                giphyImage.attr("data-state", "still");
                giphyImage.attr("data-still", staticSrc);
                giphyImage.attr("data-animate", defaultAnimatedSrc);
                UserDiv.append(text);
                UserDiv.append(giphyImage);
                $("#displayArea").prepend(UserDiv);
    
            }
        });
    }
    
     

    
    });
    
    

