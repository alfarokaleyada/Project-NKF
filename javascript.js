$(document).ready(function(){


    //this will update the button we have on the page//
    $("#searchbtn").on("click", function(e){

        e.preventDefault();

        //this is the value that the user inputs in the input field - query is a variable//
        var query = $("#searchHere").val();

        //this is where the API link will go - make sure you change it and add the value taken from the input and concatinate it to the API//
        var url = "";

        if(query !== ""){

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
                        <h4>${latestNews[i].title}</h4>
                        <img src="${latestNews[i].urlToImage}>
                        <p>${latestNews[i].description}</p>
                        <p>${latestNews[i].content}</p>
                        `;

                    }

                    if(output !== ""){

                    }
                    else{
                        $("#searchResults").html("There is no news");

                    }
                } 


            })

        }
        else{

            console.log("Please Enter Something");
        }


    });

});