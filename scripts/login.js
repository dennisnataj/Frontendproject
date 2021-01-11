const loginForm = document.querySelector(".login_form")
const user = document.querySelector("#username")
const pass = document.querySelector("#password")

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var params = new URLSearchParams();
    params.append('username', user.value);
    params.append('password', pass.value);

    axios.post("http://localhost:57835/login", params)
    .then(response => {
        localStorage.setItem("logged_in", JSON.stringify(response.data))
        location.href = "/"
    })
    .catch(error => console.log(error))
})