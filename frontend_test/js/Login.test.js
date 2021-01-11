var Login = require("./Login").then(response => response.status)


test("Testa login", () => {
    expect(Login).toBe(200)
})