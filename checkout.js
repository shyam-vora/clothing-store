// ================= LOGIN PROTECTION =================
if (!localStorage.getItem("loggedIn")) {
    window.location.href = "auth.html";
}

// ================= LOAD AFTER HTML =================
var cart = JSON.parse(localStorage.getItem("cart")) || [];
var totalEl = document.getElementById("checkout-total");

var total = 0;

for (let i = 0; i < cart.length; i++) {
    total += Number(cart[i].price) * Number(cart[i].qty);
}

// SHOW TOTAL
totalEl.innerText = "$" + total;

    // ================= FORM SUBMIT =================
    document.getElementById("checkout-form").addEventListener("submit", function (e) {
        e.preventDefault();

        var name = document.getElementById("name").value.trim();
        var address = document.getElementById("address").value.trim();
        var phone = document.getElementById("phone").value.trim();

        if (!name || !address || !phone) {
            alert("All fields are required");
            return;
        }

        alert("🎉 Order placed successfully!");

        localStorage.removeItem("cart");
        window.location.href = "success.html";
    });
