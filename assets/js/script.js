// Variable topics



// I need to get the Giphy API
var giphyApi = "YqyEfo8vTyVCZ1FdBJq4xdItgMQbAOMM";

var getGiphy = function() {

    var gifName = $(this).attr("data-name")
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=" + giphyApi;

    $.ajax({
        method: 'GET',
        url: queryUrl
    }).then(function(response){
        gifDiv = $('<div>');
        console.log(response);
    });
}

getGiphy;



// I need an array to pre-poppulate buttons using the info from Giphy

// I need 