var request = require("request")
var axios = require("axios")

async function GetStatusCode() {
    return await axios.get("http://localhost:57835/dishes/alldishes")
}


module.exports = GetStatusCode()