var VideosA = {
    "async": true,
    "crossDomain": true,
    "url": "https://free-football-soccer-videos.p.rapidapi.com/",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
        "x-rapidapi-key": "b14a035665msh3cee34533db4371p18b45fjsn6f4ad8ee9190"
    }
}


$.ajax(VideosA).then(function (response) {

function renderVideos() {
for (var i = 0; i < response.length; i++) {

              
    var Videos = document.getElementById("Videos");
    var div1 = $('<section><section>').appendTo(Videos);
    var div1 = $('<div class="container ">').appendTo(Videos);
    var divCol = $('<div  class="col-sm-4 col-md-4">').appendTo(div1);
    var divMatch = $('<h4 id="Dev" class="match0">' + response[i].title + '"</h4>').appendTo(divCol);
    var divP1 = $(' <p>AAssociation football, more commonly known as football or soccer, is a team sport played with a spherical ball between two teams of eleven players. It is played by 250 million players in over 200 countries and dependencies, making it the worlds most popular sport.</p>').appendTo(divCol);
    var divIP = $('<p> <i class="glyphicon glyphicon-envelope"></i> Alfarok.Aleyada@gmail.com<br/> <i class="glyphicon glyphicon-globe" id="league0"> League: "'+  response[i].competition.name + '</i><br /> <i class="glyphicon glyphicon-gift"> Date: ' + response[i].date + '</i> </p>').appendTo(divCol);

    rUrl = response[i].thumbnail
    var divImage = $('<div>' + "<img class=img-responsive src=" + rUrl +  ">" + '</div>').appendTo(divCol);

    var divDes = $('<h5><div class="p">As an Engineer without thinking out of the box, my job wouldn be creative. </div></h5>').appendTo(divCol);

    var vodURL = (response[i].embed);

    var divRl = $(' <div class="col-sm-8 col-md-8">   <blockquote>  <div >' + vodURL + '</div> </blockquote> </div>').appendTo(div1);

}
}
renderVideos()
});