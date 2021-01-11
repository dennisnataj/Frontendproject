// DOM objects
const restaurants = document.querySelector("#restaurants")
// GET => Restaurants
fetch("http://localhost:57835/restaurant/all").then(response => response.json()).then(result => {
    result.map(single => {
        restaurants.innerHTML += `
        <div class="col-sm-12 col-md-3 mb-4" id="restaurants">
            <div class="card">
                <div class="card-body">
                <p style="display: none">${single.id}</p>
                <p>${single.name}</p>
                <p>${single.adress}</p>
                <p>${single.email}</p>
                </div>
                <div class="card-footer">
                    <a href="update.html" class="btn btn-primary update">Uppdatera</a>
                    <a href="delete.html" class="btn btn-danger delete">Radera</a>
                </div>
            </div>
        </div>
        `
    })

    const deleteButtons = document.querySelectorAll(".delete");
    const updateButtons = document.querySelectorAll(".update")

    deleteButtons.forEach(button => button.addEventListener("click", (event) => {
        event.preventDefault();
        const id_to_delete = event.target.parentElement.parentElement.children[0].children[0].innerText;
        const answer = confirm("Vill du radera denna restaurang?")
        console.log(id_to_delete)
        if (answer) {
            fetch(`http://localhost:57835/restaurant/${id_to_delete}`, {
                method: 'DELETE',
            })
                .then(res => res.text()) // or res.json()
                .then(res => location.reload())
        }
    }))

    updateButtons.forEach(update => {
        update.addEventListener("click", e => {
            e.preventDefault()
            const update_id = e.target.parentElement.parentElement.children[0].children[0].innerText
            // Create temporary id to update in localstorage
            localStorage.setItem("update_id", update_id)
            location.href = "update.html"
        })
    })


});
