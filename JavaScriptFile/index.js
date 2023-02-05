function checkUserNameAndUserPassword(event) {
    var usrename = document.getElementById("usrename").value;
    var userpassword = document.getElementById("userpassword").value;
    var UN = localStorage.getItem("userName")
    var UP = localStorage.getItem("usrPassword")
    var usernameAnduserPassword = document.getElementById("usernameAnduserPassword");
    if (usrename != UN || userpassword != UP) {

        usernameAnduserPassword.style.color = "red"
        usernameAnduserPassword.innerHTML = "UserName or Password Incoreact"
        event.preventDefault()
    } else {
        usernameAnduserPassword.innerHTML = "";
    }


}
function showMassageWhenInputPassword() {
    var usrename = document.getElementById("usrename").value;
    var userpassword = document.getElementById("userpassword").value;
    var UN = localStorage.getItem("userName")
    var UP = localStorage.getItem("usrPassword")
    if (usrename != UN || userpassword != UP) {

        usernameAnduserPassword.style.color = "red"
        usernameAnduserPassword.innerHTML = "UserName or Password Incoreact"


    } else {
        usernameAnduserPassword.innerHTML = "";
    }

}
function showPassword() {
    var pass = document.getElementById("userpassword");
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";

    }
}
function RememberUserNameAndUserPasswor() {
    var RemembeUsreName = document.getElementById("usrename").value;
    var RemembeUserPassword = document.getElementById("userpassword").value;
    var rememberme = document.getElementById("rememberme");
    if (rememberme.checked) {
        localStorage.setItem("rememberUserName", RemembeUsreName);
        localStorage.setItem("rememberUserpassword", RemembeUserPassword);
    }

}

