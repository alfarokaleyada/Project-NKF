// var userPlayer = "Aguero Sergio"

// var playerName = "";
// var playerNumber = "";
// var playerCountry = "";
// var playerPosition = "";
// var playerAge = "";
// var playerMatchPlayed = "";
// var playerGoals = "";
// var playerYellowCards = "";
// var playerRedCards = "";
// var playerTeam = "";



// var queryURL = "https://allsportsapi.com/api/football/?&met=Players&playerName=" + userPlayer + "&APIkey=20b0937652f4174b699194483648da7a39bd17dc33735316a7902c6a55557422"

// $.ajax({
//     type: "GET",
//     url: queryURL
// }).then(function(response){
//     console.log(response);
//     console.log(response.result[0]);
//     playerName = response.result[0].player_name;
//     console.log(playerName);
//     playerNumber = response.result[0].player_number;
//     console.log(playerNumber);
//     playerCountry = response.result[0].player_country;
//     console.log(playerCountry);
//     playerPosition = response.result[0].player_type;
//     console.log(playerPosition);
//     playerAge = response.result[0].player_age;
//     console.log(playerAge);
//     playerMatchPlayed = response.result[0].player_match_played;
//     console.log(playerMatchPlayed);
//     playerGoals = response.result[0].player_goals;
//     console.log(playerGoals);
//     playerYellowCards = response.result[0].player_yellow_cards;
//     console.log(playerYellowCards);
//     playerRedCards = response.result[0].player_red_cards;
//     console.log(playerRedCards);
//     playerTeam = response.result[0].team_name;
//     console.log(playerTeam);
// })

/////////////////////////////////////////////////////////////////////////////////

// function buildQueryURL() {
//     var userPlayer = $("#search-term");
//     var queryURL = "https://allsportsapi.com/api/football/?&met=Players&playerName=" + userPlayer + "&APIkey=20b0937652f4174b699194483648da7a39bd17dc33735316a7902c6a55557422";
    
// }

// $("#run-search").on("click", function (event) {
    
//     event.preventDefault();

//     clear();

//     var queryURL = buildQueryURL();

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){
//         console.log(response);

//     });
// });


///////////////////////////////////////////////////////////////////////////////////

$("#run-search").on("click", function (event) {

    event.preventDefault();

    

    var userPlayer = $("#search-term").val();
    console.log(userPlayer);
    var queryURL = "https://allsportsapi.com/api/football/?&met=Players&playerName=" + userPlayer + "&APIkey=20b0937652f4174b699194483648da7a39bd17dc33735316a7902c6a55557422";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        type: "GET"
    }).then(function (response) {
        console.log(response);

    });
});

//////////////////////////////////////////////////////////////////////////////////
