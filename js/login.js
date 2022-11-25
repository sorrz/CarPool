const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("loginButton");
const uname = document.getElementById("name-field");
const password = document.getElementById("password-field");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const newName = uname.value;
    const newPassword = password.value;

    let result = ""

    if (newName !== "") {
       alert ("Welcome " + newName + " !") ;
    }

    else {
        result +="Error - username cannot be empty";
    }

    if (newName == "") {
        result += "Error - username cannot be empty";
    }
    if (newPassword == "") {
       
        result += (result !== "" ? "\n" : "") + "Error - password cannot be empty";
    }

    if (result !== "")
    {
        alert(result);
    }
    else {
        // Logged in
        alert("Welcome " + newName + " !");
        localStorage.setItem("Username", newName);
        console.log(localStorage.getItem("Username"))
        window.location.href="./index2.html";
    }

})
