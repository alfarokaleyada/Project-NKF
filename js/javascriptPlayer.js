
        // var teamName = "Real Madrid"

        $("#run-search").on("click", function (event) {
            event.preventDefault();
            var playerName = $("#search-term").val();
            console.log(playerName);

    
            var playser = {
              "async": true,
              "crossDomain": true,
              "url": "https://api-football-v1.p.rapidapi.com/v2/players/search/" + playerName ,
              "method": "GET",
              "headers": {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "b14a035665msh3cee34533db4371p18b45fjsn6f4ad8ee9190"
              }
            }
     

       
     $.ajax(playser).then(function (response) {
        
                  console.log(response);


                  // Log the queryURL
            console.log(playser);
    
            // Log the resulting object
            console.log(response.api.players[0].player_name);
            console.log(response.api.players[0].position);


            function renderPlayers() {
              for (var i = 0; i < response.api.players.length; i++) {

                var modalBody = document.getElementById("modal-body");

            var div1 = $('<div><h1>' + response.api.players[i].player_name + ' </h1></div> <hr size="10">').appendTo(modalBody);
            var div2 = $('<div> Name:' + response.api.players[i].player_name + '</div>').appendTo(modalBody);
            var div3 = $('<div> Age:' + response.api.players[i].age + '</div>').appendTo(modalBody);
            var div4 = $('<div> BOD: ' + response.api.players[i].birth_date + '</div>').appendTo(modalBody);
            var div5 = $('<div> Place: ' + response.api.players[i].birth_place + '</div>').appendTo(modalBody);
            var div6 = $('<div> Nationality: ' + response.api.players[i].nationality + '</div>').appendTo(modalBody);
            var div7 = $('<div> Height: ' + response.api.players[i].height + '</div>').appendTo(modalBody);
            var div8 = $('<div> Weight: ' + response.api.players[i].weight + '</div>').appendTo(modalBody);
            var div8 = $('<div> <br> </div>').appendTo(modalBody);

              }

            }

            renderPlayers()

          

          });
    

    });

    

//////////////////////////////////////////////////////////////////////////////////
