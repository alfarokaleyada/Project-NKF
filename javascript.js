$(document).ready(function(){



    //this will update the button we have on the page//
    $("#searchbtn").on("click", function(e){

        e.preventDefault();

        //this is the value that the user inputs in the input field - query is a variable//
        var query = $("#searchHere").val();

        //this is where the API link will go - make sure you change it and add the value taken from the input and concatinate it to the API//

        var url = "https://api-football-v1.p.rapidapi.com/v2/teams/search/"+ query +"&apiKey=b14a035665msh3cee34533db4371p18b45fjsn6f4ad8ee9190";
       
       
        if(query !== ""){


            var input = document.getElementById("myInput");
            input.addEventListener("keyup", function(event) {
              if (event.keyCode === "enter") {
               event.preventDefault();
               document.getElementById("searchButton").click();
                
                showPage();

              }

            });
    
            function showPage(){
                $.ajax({
                    //this url will carry the API from above
                    url:url,
                    method:"GET",
                    dataType: "Json", 
                    //below i need to set variables for the different arrays within the API that we are pulling like the stats or the latest news//
                    success: function(stats){
                        var output = "";
                        var latestNews = stats.articles;
                        //below we will update it with the documentation within the API which will show in the browser in the specific DIV assigned to it//
                        for(var i in latestNews){
                            output +=`
                            //this is where we need to update the DOM with paragraphs tags to show the information from the API//
                            `;
    
                        }
    
                        if(output !== ""){
                            //below is what will show the results if statistics are found and display them in the browser//
                            $("#searchResults").html(output);
    
                        }
    
                        //below is what will show if no information or data is found for what was input by the user//
                        else{
    
                            var newsNotFound = "There is no news available!"
                            $("#searchResults").html(newsNotFound);
    
                        }
                    } 
    
    
                })
    
            }
            else{
    
                console.log("Please Enter Something");
            }
    
    
        });
    
    });




            }
           