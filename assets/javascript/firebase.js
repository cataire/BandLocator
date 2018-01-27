// // Initialize Firebase
//   var config = {
// //     removed to prevent costs
//   };
//   firebase.initializeApp(config);
    
//   var database = firebase.database();
//   let venueCity;
//   let venueCountry;
//   let venueName;

//   $('#search-btn').on('click', function(){

//     // Retrieve user inputs from form
//     var query = $('#query').val().trim();
 
//     // Create an object for new train to be added
//     var newArtist = {
//       createdAt:  new Date().toString(),
//       userSearched: query,
//       nextEventCity:venueCity,
//       nextEventCountry:venueCountry,
//       nextEventInfo:venueName,
//     }
  
//     console.log(newArtist.createdAt);
//     console.log('here is my new artist',newArtist)
//     database.ref().push(newArtist);
  
//     $('#query').val('');

//     return false;
  
//   });
  
  
//   database.ref().on('child_added', function(childSnapshot, prevChildKey) {
  
//     var query = childSnapshot.val().query;
  
  

//   });
  
  
