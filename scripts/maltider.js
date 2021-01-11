const display = document.querySelector(".display")
const basketButton = document.querySelector(".basket .main-button");
const completeButton = document.querySelector(".complete")
const closeModal = document.querySelector(".close-modal")
const successMsg = document.querySelector(".success-msg")


if (localStorage.getItem("meals") != null) {

    basketButton.innerText = JSON.parse(localStorage.getItem("meals")).length + " måltider"
} else {
    basketButton.innerText = "0 måltider"
}

axios.get("http://localhost:57835/dishes/alldishes")
    .then(response => {
        const { data } = response
        const list = []
        for (let i = 0; i < 12; i++) {
            list.push(data[i]);
        }

        list.forEach(single => {
            console.log(single)
            display.innerHTML += `
            <div class="col-sm-12 col-md-4 mb-3 text-center">
                <div class="restaurant food py-4">
                    <p>${single.name}</p>
                    <p>${single.price}:-</p>
                    <ul class="ingredients">
                        <p>Ingredients</p>
                        ${single.Ingredient.map(ing => "<li>" + ing.name + "</li>")}
                    </ul >
                    <a href="#" class="button primary add_to_cart main-button">Lägg i varukorg</a>
                </div>
            </div>
                `
            const lis = document.querySelectorAll("li")
            lis.forEach(li => {
                if (li.nextSibling.textContent == ",") {
                    li.nextSibling.remove();
                }
            })
        })

        const addToCartButtons = document.querySelectorAll(".add_to_cart")
        addToCartButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                // Build item to add to cart
                const meal = {}
                meal.name = event.target.parentElement.children[0].innerText
                meal.price = event.target.parentElement.children[1].innerText
                let meals = []

                if (localStorage.getItem("meals") == null) {
                    meals.push(meal)
                    localStorage.setItem("meals", JSON.stringify(meals))
                    basketButton.innerHTML = `${meals.length} måltider <ion-icon name="arrow-forward-outline"></ion-icon>`
                    basketButton.className = "btn btn-primary main-button animate__animated animate__bounce"
                    setTimeout(() => {
                        basketButton.className = "btn btn-primary main-button"
                    }, 2000)
                } else {
                    meals = JSON.parse(localStorage.getItem("meals"))
                    meals.push(meal)
                    localStorage.setItem("meals", JSON.stringify(meals))
                    basketButton.innerHTML = `${meals.length} måltider <ion-icon name="arrow-forward-outline"></ion-icon>`
                    basketButton.className = "btn btn-primary main-button animate__animated animate__bounce"
                    setTimeout(() => {
                        basketButton.className = "btn btn-primary main-button"
                    }, 2000)
                }
            })
        })

    })
    .catch(error => console.log(error))

completeButton.addEventListener("click", (e) => {
    e.preventDefault()
    closeModal.click();
    successMsg.style.display = "block";
    setTimeout(() => {
        localStorage.removeItem("meals")
        location.reload();
    }, 1500)
})






