const request = require("request")

request("https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=3895ff63ca8a0ff8a5a091b750115b60&photo_id=50568222968&format=json&nojsoncallback=1", function (error, response, body) {
    console.log(body)
})