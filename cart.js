// ================= CART STORAGE =================
var cart = localStorage.getItem("cart");

if (cart == null) {
    cart = [];
} else {
    cart = JSON.parse(cart);
}

// ================= ADD TO CART (ALL PRODUCT CARDS) =================
var cartButtons = document.getElementsByClassName("cart-btn");

for (var i = 0; i < cartButtons.length; i++) {
    cartButtons[i].onclick = function (event) {

        event.preventDefault();
        event.stopPropagation();

        var productBox = this.closest(".pro");

        var product = {
            name: productBox.getAttribute("data-name"),
            price: productBox.getAttribute("data-price"),
            image: productBox.querySelector("img").src,
            qty: 1
        };

        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Product added to cart");
    };
}

// ================= ADD TO CART (SINGLE PRODUCT PAGE) =================
function addToCart() {

    var name = document.querySelector(".single-pro-details h4").innerText;
    var price = document.querySelector(".single-pro-details h2").innerText.replace("$", "");
    var image = document.getElementById("MainImg").src;
    var qty = document.querySelector(".single-pro-details input").value;
    var size = document.querySelector(".single-pro-details select").value;

    if (size === "Select Size") {
        alert("Please select size");
        return;
    }

    var product = {
        name: name,
        price: price,
        image: image,
        qty: qty,
        size: size
    };

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart");
}
function goToCheckout() {
    var loggedIn = localStorage.getItem("loggedIn");

    if (!loggedIn) {
        // remember where user wanted to go
        localStorage.setItem("redirectAfterLogin", "checkout.html");
        window.location.href = "auth.html";
    } else {
        window.location.href = "checkout.html";
         
    }
}