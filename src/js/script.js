class Hamburger {
    static SIZES = {
        SMALL: { price: 50, calories: 20 },
        LARGE: { price: 100, calories: 40 }
    };

    static STUFFINGS = {
        CHEESE: { price: 10, calories: 20 },
        SALAD: { price: 20, calories: 5 },
        POTATO: { price: 15, calories: 10 }
    };

    static TOPPINGS = {
        MAYO: { price: 20, calories: 5 },
        SAUCE: { price: 15, calories: 0 }
    };

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        return this.size.price + this.stuffing.price + this.toppings.reduce((total, topping) => total + topping.price, 0);
    }

    calculateCalories() {
        return this.size.calories + this.stuffing.calories + this.toppings.reduce((total, topping) => total + topping.calories, 0);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerForm = document.getElementById("hamburgerForm");
    const caloriesElem = document.getElementById("calories");
    const priceElem = document.getElementById("price");

    hamburgerForm.addEventListener("submit", handleFormSubmit);

    updateGithubLink();
});

function handleFormSubmit(event) {
    event.preventDefault();

    const sizeValue = document.getElementById("size").value.toUpperCase();
    const stuffingValue = document.getElementById("stuffing").value.toUpperCase();
    const toppings = getSelectedToppings();

    const hamburger = new Hamburger(Hamburger.SIZES[sizeValue], Hamburger.STUFFINGS[stuffingValue]);
    toppings.forEach(topping => hamburger.addTopping(Hamburger.TOPPINGS[topping]));

    displayHamburgerInfo(hamburger);
}

function getSelectedToppings() {
    const toppings = [];
    if (document.getElementById("mayo").checked) toppings.push("MAYO");
    if (document.getElementById("sauce").checked) toppings.push("SAUCE");
    return toppings;
}

function displayHamburgerInfo(hamburger) {
    document.getElementById("calories").textContent = hamburger.calculateCalories();
    document.getElementById("price").textContent = hamburger.calculatePrice();
}

function updateGithubLink() {
    const currentPageUrl = window.location.href;
    const [username, repoName] = currentPageUrl.split("/").slice(2, 4);
    const githubRepoUrl = `https://github.com/${username}/${repoName}`;
    document.getElementById("github-link").href = githubRepoUrl;
}
