var request = require("request")
var axios = require("axios")

async function GetStatusCode() {
    return await axios.post("http://localhost:57835/login", {
        username: "test",
        password: "123456789"
    })
}


module.exports = GetStatusCode()