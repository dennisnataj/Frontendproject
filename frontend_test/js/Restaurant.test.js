var restaurant = require("./Restaurant").then(response => response.status)


test("Hämta restauranger i Göteborg", () => {
    expect(restaurant).toContain(200)
})