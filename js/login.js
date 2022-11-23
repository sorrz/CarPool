const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("loginButton");
const name = document.getElementById("name-field");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const newName = name.value;

    if (name != null) {
        alert("Welcome " + newName + " !");
    }

})
