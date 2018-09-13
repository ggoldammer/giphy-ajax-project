// Variable topics
var topics = ["spiderman", "superman", "batman", "the flash", "shazam", "captain america", "iron man", "the hulk", "hawkeye", "thor", "green lantern", "the joker", "black panther", "groot"]

// I need to create buttons out of the topics array
var topicButton = function(){
    $("#generated-buttons").empty();

    for (let i = 0; i < topics.length; i++) {
        var button = $('<button class="generated-button">');
        button.attr("data-name", topics);
        button.text(topics[i].toUpperCase());

        $("#generated-buttons").append(button);
    }
}

topicButton();



// I need to get the Giphy API and generate the gifs
var giphyApi = "YqyEfo8vTyVCZ1FdBJq4xdItgMQbAOMM";

var getGiphy = function() {

    var gifName = $(".generated-button").attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=" + giphyApi + "&limit=10&rating=g";

    $.ajax({
        method: 'GET',
        url: queryUrl
    }).then(function(response){
        for (let i = 0; i < response.data.length; i++) {
            var gifItem = response.data[i];
            var gifDiv = $("<div>");
            var gif = $("<img>");
            // gif.attr("src", response.data.)
            // gifDiv.append()
        }
    });
}

getGiphy();



// I need an array to pre-poppulate buttons using the info from Giphy

// I need 