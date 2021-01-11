const Role = document.querySelector(".role")
const Address = document.querySelector(".address")
const Stad = document.querySelector(".stad")
const Username = document.querySelector(".username")
const Email = document.querySelector(".email")
const Telefon = document.querySelector(".phone")
const updateButton = document.querySelector(".update_button")
const Id = document.querySelector(".id")

const update_id = localStorage.getItem("update_id")

fetch(`http://localhost:57835/Users/${update_id}`)
    .then(response => response.json())
    .then(data => {
        const { id, role, adress, username, email, phone, city } = data
        Username.value = username
        Email.value = email
        Telefon.value = phone
        Role.value = role
        Address.value = adress
        Stad.value = city
        Id.value = id

    })
    .catch(err => console.log(err))

updateButton.addEventListener("click", async e => {
    e.preventDefault();

    data = {
        id: Id.value,
        role: Role.value,
        adress: Address.value,
        username: Username.value,
        email: Email.value,
        phone: Telefon.value,
        city: Stad.value,
        password: "123123123123"
    }
    fetch('http://localhost:57835/Users/' + update_id, {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.text())
        .then(output => console.log(output))
})
