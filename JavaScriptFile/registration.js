var fnameReg = /^[a-zA-Z]{3,20}$/   //( )[a-zA-Z]{3,20}$/
var lnameReg = /^[a-zA-Z]{3,20}( )*[a-zA-Z]{0,20}$/
var emailReg =/^[a-zA-Z]{3,20}[0-9]*[$ # &]*@(gmail|yahoo|outlook)(.com|.sa)$/i
var passwordlReg = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
var numberReg =  /^(01)(0|1|2|5)[0-9]{8}$/
function validationFName() {
    var userFName = document.getElementById("Fname").value;
    var fn =document.getElementById("FN")
    if (!fnameReg.test(userFName)) {

        fn.style.color = "red"
        fn.innerHTML = "Invalid Name"
        return false
    } else {
        fn.innerHTML = ""
        return true
    }
}
function validationLName() {
    var userLName = document.getElementById("Lname").value;
    var ln =document.getElementById("LN")
    if (!lnameReg.test(userLName)) {

        ln.style.color = "red"
        ln.innerHTML = "Invalid Name"
        return false
    } else {
        ln.innerHTML = ""
        return true
    }
}
function validationEmail() {

    var userEmail = document.getElementById("email").value;
    var p2 = document.getElementById("span2");
    if (!emailReg.test(userEmail)) {

        p2.style.color = "red"
        p2.innerHTML = "Invalid Email"
        return false
    } else {
        p2.innerHTML = ""
        return true
    }

}
function validationPassword() {

    var userPassword = document.getElementById("password").value;
    var p3 = document.getElementById("span3")
    if (!passwordlReg.test(userPassword)) {

        p3.style.color = "red"
        p3.innerHTML = "Invalid Password"
        return false
    } else {
        p3.innerHTML = ""
        return true
    }

}
function checkPasswordAndRepeatPassword() {
    var userPass = document.getElementById("password").value;
    var repUserpassw = document.getElementById("repeat-Psw").value;
    var span4 = document.getElementById("span4");
    if (userPass === repUserpassw) {
        span4.innerHTML = ""
        return true

    } else{
        span4.style.color = "red"
        span4.innerHTML = "password And repeatpassword Should Be The Same"
        return false
    }
}
function validationNumber()
{
    var userNumber= document.getElementById("number").value;
    var span5 = document.getElementById("span5");
    if (!numberReg.test(userNumber)) {

        span5.style.color = "red"
        span5.innerHTML = "Invalid Numbr"
        return false
    } else {
        span5.innerHTML = ""
        return true
    }

}

function SaveData(event) {

    var userFName = document.getElementById("Fname").value;
    var userLName = document.getElementById("Lname").value;
    var userE = document.getElementById("email").value;
    var userB = document.getElementById("password").value;
    var repUserB = document.getElementById("repeat-Psw").value;
    var userNum= document.getElementById("number").value;
    var radiochecked=document.getElementsByName('gender');
    console.log(userFName,userE,userB)
    var userG;
    for(i = 0; i < radiochecked.length; i++) {
        if(radiochecked[i].checked)
        userG=radiochecked[i].value
    }
    if (!fnameReg.test(userFName) ||!lnameReg.test(userLName)||!emailReg.test(userE) || !passwordlReg.test(userB) || !passwordlReg.test(repUserB)||!numberReg.test(userNum))
     {
        event.preventDefault()
    } else {

        localStorage.setItem("userName", userFName+" "+userLName)
        //localStorage.setItem("userLName",  userLName)
        localStorage.setItem("userEmail", userE)
        localStorage.setItem("usrPassword", userB)
        localStorage.setItem("userNumber", userNum)
        localStorage.setItem("userGender", userG)
        
    }

}
function showPassword() {
    var pass = document.getElementById("password");
    var repatpass = document.getElementById("repeat-Psw");
    if (pass.type === "password" && repatpass.type === "password") {
        pass.type = "text";
        repatpass.type = "text";
    } else {
        pass.type = "password";
        repatpass.type = "password";
    }
}
function disabledbutton() {
    var FN = validationFName()
    var LN=validationLName() 
    var uE = validationEmail();
    var uP = validationPassword();
    var rp = checkPasswordAndRepeatPassword();
    var uNum=validationNumber();
    if (FN&&LN && uE && uP &&rp&&uNum) {
        document.getElementById("submit").disabled = false
    } else {
        document.getElementById("submit").disabled = true
    }
}

