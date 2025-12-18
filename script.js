// ================= PRODUCT IMAGE CHANGE =================
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

if (MainImg && smallimg.length > 0) {
    for (let i = 0; i < smallimg.length; i++) {
        smallimg[i].onclick = function () {
            MainImg.src = smallimg[i].src;
        };
    }
}

// ================= PRODUCT CLICK → OPEN SINGLE PRODUCT =================
var pro = document.getElementsByClassName("pro");

for (let i = 0; i < pro.length; i++) {
    pro[i].onclick = function () {

        var product = {
            image: this.querySelector("img").src,
            name: this.querySelector("h5").innerText,
            price: this.querySelector("h4").innerText
        };

        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "sproduct.html";
    };
}

// ================= LOAD PRODUCT ON sproduct.html =================
var selectedProduct = localStorage.getItem("selectedProduct");

if (selectedProduct) {
    selectedProduct = JSON.parse(selectedProduct);

    document.getElementById("MainImg").src = selectedProduct.image;
    document.querySelector(".single-pro-details h4").innerText = selectedProduct.name;
    document.querySelector(".single-pro-details h2").innerText = selectedProduct.price;
}
function goToShop() {
    window.location.href = "shop.html";
}