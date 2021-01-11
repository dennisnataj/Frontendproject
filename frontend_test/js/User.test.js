const user = require("./User")

test("See if user is admin", () => {
    expect(user).toContain("user")
})