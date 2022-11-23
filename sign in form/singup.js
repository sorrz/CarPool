const loginForm = document.getElementById("signup-form");
const loginButton = document.getElementById("signupButton");
const name = document.getElementById("name-field");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const newName = name.value;

    //  const phone = loginForm.phone.value;
    //  const email = loginForm.email.value;
    //  const password = loginForm.password.value;
    //  const city = loginForm.city.value;


    if (name != null) {
        alert("Welcome " + newName + " !");
    }

})