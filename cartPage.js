var cart = JSON.parse(localStorage.getItem("cart")) || [];
var tbody = document.getElementById("cart-items");
var totalEl = document.getElementById("cart-total");

// ===== RENDER CART =====
function renderCart() {
    tbody.innerHTML = "";
    var total = 0;

    if (cart.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center">
                    Cart is empty
                </td>
            </tr>
        `;
        totalEl.innerText = "₹0";
        return;
    }

    for (let i = 0; i < cart.length; i++) {
        var price = parseInt(cart[i].price);
        var qty = parseInt(cart[i].qty);
        var subtotal = price * qty;
        total += subtotal;

        tbody.innerHTML += `
            <tr>
                <td>
                    <a href="#" onclick="removeItem(${i}); return false;">❌</a>
                </td>
                <td>
                    <img src="${cart[i].image}" width="70">
                </td>
                <td>${cart[i].name}</td>
                <td>$${price}</td>
                <td>
                    <button onclick="changeQty(${i}, -1)">−</button>
                    <span style="margin:0 8px">${qty}</span>
                    <button onclick="changeQty(${i}, 1)">+</button>
                </td>
                <td>$${subtotal}</td>
            </tr>
        `;
    }

    totalEl.innerText = "₹" + total;
}

// ===== CHANGE QUANTITY =====
function changeQty(index, change) {
    cart[index].qty = parseInt(cart[index].qty) + change;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// ===== REMOVE ITEM =====
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// INITIAL LOAD
renderCart();
