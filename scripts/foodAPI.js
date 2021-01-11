
const display = document.querySelector(".display")
const localCity = localStorage.getItem("city_name")

axios.get(`http://localhost:57835/restaurant/sort/${localCity}`)
    .then(response => {
        response.data.forEach(restaurant => {
            console.log(restaurant)
            const { id, adress, city, name } = restaurant
            display.innerHTML += `
            <div class="col-sm-12 col-md-4 my-4">
                <div class="restaurant card">
                   <div class="card-body">
                    <p style="display: none">${id}</p>
                    <p class="restaurant-name">${name}</p>
                    <p>${adress}, ${city}</p>
                   </div>
                </div>
            </div>
            `
        })
    })
