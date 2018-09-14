// Variable topics
var topics = ["spiderman", "superman", "batman", "the flash", "wonder woman", "captain america", "iron man", "the hulk", "hawkeye", "thor", "green lantern", "the joker", "black panther", "groot"]

// I need to create buttons out of the topics array
var topicButton = function () {
    $("#generated-buttons").empty();

    for (let i = 0; i < topics.length; i++) {
        var button = $('<button class="generated-button btn btn-primary">');
        button.attr("data-name", topics[i]);
        button.text(topics[i].toUpperCase());

        $("#generated-buttons").append(button);
    }
}

topicButton();



// I need to get the Giphy API and generate the gifs
var giphyApi = "YqyEfo8vTyVCZ1FdBJq4xdItgMQbAOMM";


$(".generated-button").on("click", function () {

    var gifName = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=" + giphyApi + "&limit=10&rating=g";

    $.ajax({
        method: 'GET',
        url: queryUrl
    }).then(function (response) {

        $("#gifLoader").empty();

        var results = response.data;
        console.log(results);

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item col-md-4'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img class='img w-100'>");
            personImage.attr("src", results[i].images.fixed_height.url);


            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifLoader").prepend(gifDiv); 
    }
        });
});