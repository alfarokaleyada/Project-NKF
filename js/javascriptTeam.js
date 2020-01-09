


        // var teamName = "Real Madrid"

        $("#run-search").on("click", function (event) {
            event.preventDefault();
            var teamName = $("#search-term").val();
            console.log(teamName);

    
        var settings = {
          "async": true,
          "crossDomain": true,
            "url": "https://api-football-v1.p.rapidapi.com/v2/teams/search/" + teamName,
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "b14a035665msh3cee34533db4371p18b45fjsn6f4ad8ee9190"
          }
        }
       
     $.ajax(settings).then(function (response) {
        
                  console.log(response);



            // Log the queryURL
            console.log(settings);
    
            // Log the resulting object
            console.log(response);
    
            // Transfer content to HTML
            $(".TeamInfo").html("<h1 >" + response.api.teams[0].name + " </h1>");
            $(".teams").text("Team Name: " + response.api.teams[0].name);
            $(".country").text("Country: " + response.api.teams[0].country);
            $(".cityOf").text("City of " + response.api.teams[0].venue_city);

    
    
              // Appending the image
            var logoDiv = $("<div class='img'></div>");
              console.log(logoDiv + " logo")
    
    
            var imgURL = (response.api.teams[0].logo);
            $("#image-div").html("<img src=" + imgURL + ">");
    
    
         
            // Log the data in the console as well
            console.log("Team Name: " + response.api.teams[0].name);
            console.log("country: " + response.api.teams[0].venue_name);
            console.log("logo: " + response.api.teams[0].venue_city);

        
          });
    

    });

    

//////////////////////////////////////////////////////////////////////////////////
