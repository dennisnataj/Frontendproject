const Name = document.querySelector(".name")
const City = document.querySelector(".city")
const Adress = document.querySelector(".address")
const Email = document.querySelector(".email")
const Delivery = document.querySelector(".delivery")
const updateButton = document.querySelector(".update_button")
const Id = document.querySelector(".id")

const update_id = localStorage.getItem("update_id")

fetch(`http://localhost:57835/restaurant/specific/${update_id}`)
    .then(response => response.json())
    .then(data => {
        const { name, city, adress, email, delivery_price } = data
        Name.value = name
        City.value = city
        Adress.value = adress
        Email.value = email
        Delivery.value = delivery_price
        Id.value = update_id

    })
    .catch(err => console.log(err))

updateButton.addEventListener("click", async e => {
    e.preventDefault();

    data = {
        id: Id.value,
        adress: Adress.value,
        city: City.value,
        name: Name.value,
        delivery_price: Delivery.value,
        email: Email.value,
        phonenumber: "",
        Dishes: [],
        User: [],
        FavoritesRestaurants: null
    }

    fetch('http://localhost:57835/restaurant/update', {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
})
