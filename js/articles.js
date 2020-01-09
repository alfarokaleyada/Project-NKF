$(document).ready(function(){

    // This is our API key
    var APIKey = "590b3d4841e7410e98d0db5713d36f87";

    // Here we are building the URL we need to query the database
        var queryURL = "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=" + APIKey;

    $.ajax({
            url: queryURL,
            method: "GET"
        })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
        // Log the queryURL
        console.log(queryURL);

    //  Articles details
       function artAll() {
      for (var i = 0; i < response.articles.length; i++) {
      var titleT = response.articles[i].title
      var imgT = response.articles[i].urlToImage

      // get elemnt from html
      var canportfolio = document.getElementById("articls");
          
                if (i == 3 || i == 7 || i == 11 || i == 15 || i > 18) {
                    var div1 = $('<div class= "col-md-12 col-sm-6 portfolio-item" >').appendTo(canportfolio);
                    var a1 = $('<a href="#portfolioModal' + [i] +'"'+ 'class="portfolio-link" data-toggle="modal">').appendTo(div1);
                    var div2 = $('<div class="portfolio-hover" >').appendTo(a1);
                    var i1 = $('<i class="glyphicon glyphicon-minus fa-2x"></i>').appendTo(div2);
                    var divC1 = $(' </div>').appendTo(i1);
                    var div3 = $('  <div class="portfolio-caption">').appendTo(div1);


                      var  rUrl = "https://mcdn.wallpapersafari.com/medium/34/30/5Oq2VQ.jpg"
                      var imgURL = (response.articles[i].urlToImage);
                      console.log(imgURL);

                      if (imgURL === null) {
                        var div2 = $('<div>' + "<img class=img-responsive src=" + rUrl +  ">" + '</div>').appendTo(div1);
                          } else{
                        var div2 = $('<div>' + "<img class=img-responsive src=" + imgURL +  ">" + '</div>').appendTo(div1);
                          }
                    

                  $(".title"+[i]).html("<h4>" + response.articles[i].title + " !</h4>");
                          console.log(response.articles[i].title)
                        var div4 = $('<div>' + "<h4>" + response.articles[i].title + " !</h4>" + '</div>').appendTo(div2);

                } 

          else {
              var div1 = $('<div class= "col-md-4 col-sm-6 portfolio-item" >').appendTo(canportfolio);
                var a1 = $('<a href="#portfolioModal' + [i] +'"'+ 'class="portfolio-link" data-toggle="modal">').appendTo(div1);
                  var div2 = $('<div class="portfolio-hover" >').appendTo(a1);
                    var i1 = $('<i class="glyphicon glyphicon-minus fa-2x"></i>').appendTo(div2);
                      var divC1 = $(' </div>').appendTo(i1);
                var div3 = $('  <div class="portfolio-caption">').appendTo(div1);


                var  rUrl = "https://mcdn.wallpapersafari.com/medium/34/30/5Oq2VQ.jpg"
                var imgURL = (response.articles[i].urlToImage);
                console.log(imgURL);

                if (imgURL === null) {
                  var div2 = $('<div>' + "<img class=img-responsive src=" + rUrl +  ">" + '</div>').appendTo(div1);
                    } else{
                  var div2 = $('<div>' + "<img class=img-responsive src=" + imgURL +  ">" + '</div>').appendTo(div1);
                    }
      
            $(".title"+[i]).html("<h4>" + response.articles[i].title + " !</h4>");
            console.log(response.articles[i].title)
            var div4 = $('<div>' + "<h4>" + response.articles[i].title + " !</h4>" + '</div>').appendTo(div2);
            }
                // get elemnt from html
                var portfolioModal = document.getElementById("articls");

                var divI1 = $('<div class="articls modal fade"'+  'id="portfolioModal' + [i]+ '" tabindex="-1" role="dialog" aria-hidden="true">').appendTo(portfolioModal);
                  var divModalContent =  $('<div class="modal-content" >').appendTo(divI1);
                    var divCloseModal =    $('<div class="close-modal" data-dismiss="modal">').appendTo(divModalContent);
                      var divLr =   $('<div class="lr">').appendTo(divCloseModal);
                        var divRl =   $('<div class="rl">').appendTo(divLr);
                        var divCI1 = $(' </div>').appendTo(divLr);

                  var divContainer = $('<div class="container">').appendTo(divI1);   
                      var divRow = $('<div class="row">').appendTo(divContainer)
                        var divLog = $(  ' <div class="col-lg-8 col-lg-offset-2">').appendTo(divRow)
                          var divmodalBody = $('<div class="modal-body" style="background-color:white;"">').appendTo(divLog)
                            var divtitle = $('<div class="title' + [i] + '"></div>').appendTo(divmodalBody)
                              var divSource = $('<div id="Source' + [i] + '"></div>').appendTo(divmodalBody)

                      var divathora = $('<div id="author' + [i] + '"></div>').appendTo(divmodalBody)
                      var divImg = $('<div id="image-divIn'  + [i] + '"></div>').appendTo(divmodalBody)
                      var divDes = $('<div id="description' + [i] + '"></div>').appendTo(divmodalBody)
                      var divCon = $('<div id="content'+ [i] + '"></div>').appendTo(divmodalBody)
                      var divMore = $('<div id="More' + [i] + '">Read More</div>').appendTo(divmodalBody)
                      var divUrl = $('<div class="url' + [i] + '"></div>').appendTo(divmodalBody)
                      var divMore1 = $('<strong>More than 240 million people around the world play soccer regularly according to the Federation Internationale de Football Association (FIFA).</strong> The game has evolved from the sport of kicking a rudimentary animal-hide ball around into the World Cup sport it is today. .</p>').appendTo(divmodalBody)
                      var divUl = $('<ul class="list-inline"></div>').appendTo(divmodalBody)
                    var divLi = $('<li id="date'+[i]+ '">Date: <div ></div>  </li>').appendTo(divUl)
                    var divLi2 = $('<li id="Url'+[i]+ '">Date: <div ></div>  </li>').appendTo(divUl)
                    var divUrl2 = $('<div class="Url"></div>').appendTo(divUl)
                    var divUli3 = $('<li>Category: Sport</li>').appendTo(divUl)
                      var divUli3 = $('<button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>').appendTo(divmodalBody)

                }
              }


              // Internal Articles details
              function artInternal() {
                  for (var i = 0; i < response.articles.length; i++) {

                  console.log(response.articles[i].title);
                  $(".titleIn"+[i]).html("<h4>" + response.articles[i].title + " !</h4>");
                      console.log(response.articles[i].title)

                  var  rUrl = "https://mcdn.wallpapersafari.com/medium/34/30/5Oq2VQ.jpg"
                  var imgURL = (response.articles[i].urlToImage);
                  console.log(imgURL);

                  if (imgURL === null) {
                          $("#image-divIn"+[i]).html("<img class=img-responsive src=" + rUrl +  ">");
                      } else{
                          $("#image-divIn"+[i]).html("<img class=img-responsive src=" + imgURL +  ">");
                      }
                        // Log the resulting object
                  console.log(response.articles[i].content);
                  $("#content"+[i]).html("<h3>" + response.articles[i].content + " !!!</h3>");

                  //Source
                  console.log(response.articles[i].source.name);
                  $("#Source"+[i]).html("<h6>" + "Source:" + response.articles[i].source.name + " </h6>");

                  //date
                  console.log(response.articles[i].publishedAt);
                  $("#date"+[i]).html("<h6>" + "Date:" + response.articles[i].publishedAt + " </h6>");

                  //Url
                  console.log(response.articles[i].publishedAt);
                  url = response.articles[i].url
                  $("#Url"+[i]).html("<a href="  + response.articles[i].url + ">" + "Visit the Website" + "</a>");

                  //More
                  console.log(response.articles[i].publishedAt);
                  url = response.articles[i].url
                  more = $("#More"+[i]).html("<a href="  + response.articles[i].url + ">" + "Read More" + "</a>");

                  console.log(response.articles[i].content);
                  $("#contentIn"+[i]).html("<h5>" + response.articles[i].content + more + " !!!</h5>");

                  //description
                  console.log(response.articles[i].description);
                  $("#description"+[i]).html("<h6>" + "Description:" + response.articles[i].description + " </h6>");
                  }

              }

            artAll();
            artInternal()

              
              });
                  
                // Highlight the top nav as scrolling occurs
                $('body').scrollspy({
                    target: '.navbar-fixed-top'
                })

                // Closes the Responsive Menu on Menu Item Click
                $('.navbar-collapse ul li a').click(function() {
                    $('.navbar-toggle:visible').click();
                });


            });               
                            
                