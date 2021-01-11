var Dishes = require("./Dishes").then(response => response.status)


test("Hämta måltider", () => {
    expect(Dishes).toContain(200)
})

