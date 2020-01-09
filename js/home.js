  
  
  // This is our API key
  var APIKey = "590b3d4841e7410e98d0db5713d36f87";
  var queryURL = "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=" + APIKey;

        $.ajax({
                url: queryURL,
                method: "GET"
            })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
            // Log the queryURL
      
            function renderArc() {

            // loop to find all news
            for (var i = 0; i < 10; i++) {
                    
             
                var imgURL = (response.articles[5].urlToImage);
                console.log(response.articles[i].urlToImage);

                // append to html
                var imgPl = document.getElementById("articls");
                imgURLN = response.articles[i].urlToImage

                    var divSec = $ ('<section class="box-container activity-element info" id="news">').appendTo(imgPl);
                    var divCardG = $(' <div class="card-grid-space info">').appendTo(imgPl);
                        var divNum = $('<div class="num"></div>').appendTo(divCardG);

                // url for image
                var  rUrl = "https://mcdn.wallpapersafari.com/medium/34/30/5Oq2VQ.jpg"

                // url for image sites
                var url1 = response.articles[i].url

                //if api withnout image force input image
                if (imgURLN === null) {
                    imgURLN = rUrl
                } else{
                    imgURLN = imgURLN
                }
                

                var divImage = $('<a  id="img1" class="  card img-responsive" href=" '+ url1 + '" style="--bg-img: url(' + imgURLN + ')">').appendTo(divCardG);
                var divI = $('<div>').appendTo(divImage);
                    var divh1 = $(' <h1>' + response.articles[i].source.name + '</h1>').appendTo(divI);
                    var divP1e = $('<p> ' + response.articles[i].title + ' </p>').appendTo(divI);
                    var divDiv1 = $('<div class="date">' + response.articles[i].source.name + '</div>').appendTo(divI);
                    var divDiv2 = $('<div class="tags">').appendTo(divI);
                        var divDiv3 = $('<div class="tag"><i class="fa fa-picture-o" aria-hidden="true"></i>').appendTo(divDiv2);
                }
            }
        renderArc()

        });
