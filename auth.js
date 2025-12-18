function register() {
    var email = regEmail.value.trim();
    var password = regPassword.value.trim();

    if (!email.includes("@")) {
        alert("Enter valid email");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    localStorage.setItem("loggedIn", "true");

    redirectAfterAuth();
}

function login() {
    var email = loginEmail.value.trim();
    var password = loginPassword.value.trim();

    var user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.email !== email || user.password !== password) {
        alert("Invalid email or password");
        return;
    }

    localStorage.setItem("loggedIn", "true");

    redirectAfterAuth();
}

function redirectAfterAuth() {
    var redirect = localStorage.getItem("redirectAfterLogin");

    if (redirect) {
        localStorage.removeItem("redirectAfterLogin");
        window.location.href = redirect;
    } else {
        window.location.href = "index.html";
    }
}
