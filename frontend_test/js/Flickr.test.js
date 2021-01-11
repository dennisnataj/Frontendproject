var flickr = require("./Flickr")

test("Hämta Bilden från Flickr", () => {
    expect(flickr).toContain(200)
})