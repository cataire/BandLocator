// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA-msJPurSl5Th8tFGBvRH5b5T4SRuiZK0",
    authDomain: "bandlocator-a80b4.firebaseapp.com",
    databaseURL: "https://bandlocator-a80b4.firebaseio.com",
    projectId: "bandlocator-a80b4",
    storageBucket: "bandlocator-a80b4.appspot.com",
    messagingSenderId: "511275654319"
  };
  firebase.initializeApp(config);

    // VARIABLES
    // --------------------------------------------------------------------------------
    // Get a reference to the database service
    var database = firebase.database();
    // Setting initial value of our click counter variable to 0
    var searchCounter = 0;
    // FUNCTIONS + EVENTS
    var musician = "";
    // --------------------------------------------------------------------------------
    // On Click of Button
    $("#search-btn").on("click", function() {
      // Add to searchCounter
      searchCounter++;

       // Get inputs
       musician = $("#query").val().trim();
       // Change what is saved in firebase
       database.ref().set({
      
        musician: musician,
        searchCount: searchCounter    
      });
    });

    database.ref().on("value", function(snapshot) {
        // Print the initial data to the console.
        console.log(snapshot.val());
        // Log the value of the various properties
  
        console.log(snapshot.val().musician);
        
        // If any errors are experienced, log them to console.
      }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

