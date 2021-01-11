const logo = document.querySelector(".logo")
const loginUser = document.querySelector(".login_user")
const loginAction = document.querySelector(".login_action")
const images = document.querySelectorAll(".image")
const currentCity = document.querySelector(".current_city")
const jumbotron = document.querySelector(".jumbotron")


// If user is logged in hide the login link
const loggedInUser = JSON.parse(localStorage.getItem("logged_in"))

if (loggedInUser !== null) {
    loginUser.innerText = loggedInUser.username
    loginAction.innerText = "Logga ut"
    loginAction.classList.add("logout")
    const logout = document.querySelector(".logout")
    logout.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("logged_in")
        location.reload()
    })
} else {

}


images.forEach(image => {
    image.addEventListener("click", (e) => {
        const city = e.target.parentElement.children[1].innerText;
        // Save city in localStorage
        localStorage.setItem("city_name", city)
        location.href = "restaurants.html"
    })
})

logo.addEventListener("click", () => location.href = "/")

// FLICKR UPDATE ADD BACKGROUND IMAGE

fetch("https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=3895ff63ca8a0ff8a5a091b750115b60&photo_id=50568222968&format=json&nojsoncallback=1")
    .then(response => response.json())
    .then(background => {
        const backgroundIMG = `https://farm${background.photo.farm}.staticflickr.com/${background.photo.server}/${background.photo.id}_${background.photo.secret}.jpg`;
        jumbotron.style.background = `linear-gradient(to bottom, rgb(215 15 100 / 27%), rgb(215 15 100 / 16%)), url(${backgroundIMG})`
        jumbotron.style.backgroundSize = "cover"
        jumbotron.style.backgroundPosition = "center"
        jumbotron.style.backgroundRepeat = "none"
    })
    .catch(error => console.log(error))



