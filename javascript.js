var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-football-v1.p.rapidapi.com/players/squad/{team_id}/{season}",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "a6a5f206abmshd98590f807493e2p123a4cjsn59002766a149"
    }
}

$.ajax(settings).then(function (response) {
    console.log(response);
});


// playerName = "lebron james"
// var playerID =""
// console.log(playerID);

// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://free-nba.p.rapidapi.com/players?page=0&per_page=25&search=" + playerName,
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "free-nba.p.rapidapi.com",
//         "x-rapidapi-key": "a6a5f206abmshd98590f807493e2p123a4cjsn59002766a149"
//     }
// }



// $.ajax(settings).then(function (response) {
//     console.log(response);
//     console.log(response.data[0].id);
//     playerID = response.data[0].id;
//     console.log("this is the id " + playerID);
//     console.log(playerID);
//     getPlayerStats(playerID)
// });



// function getPlayerStats(id) {


//     console.log("The player ID from within get playerstats is " + id);
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://free-nba.p.rapidapi.com/stats?page=0&per_page=82&player_ids=" + id,
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "free-nba.p.rapidapi.com",
//             "x-rapidapi-key": "a6a5f206abmshd98590f807493e2p123a4cjsn59002766a149"
//         }
//     }

//     $.ajax(settings).then(function (res) {
//         console.log(res.data);
//     });


// }


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// Gabe's Outline Coding



// var input = ""

// ajax url + apiKey + input

// $.ajax({
//     type: "method",
//     url: "url",
//     data: "data",
//     dataType: "dataType",
//     success: function (response) {
        
//     }
// }).then( function (response) { 
//     var playerID = response.playerID

//     if(playerID){
//         getPlayStats(playerID)

//     }
//  }

// );


// function getPlayStats(id) {

//     url = apiURL + apiKey +id
//     $.ajax({
//         type: "method",
//         url: "url",
//         data: "data",
//         dataType: "dataType",
//         success: function (response) {
            
//         }
//     }).then(function (response) { 

//      });
    
// }