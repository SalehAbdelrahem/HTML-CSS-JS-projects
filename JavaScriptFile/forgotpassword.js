function getPassword()
{
    var FP=document.getElementById("forgotpassword");
    var uf=document.getElementById("form1");
    var usreName=document.getElementById("usreName").value;
    var userN=localStorage.getItem("userName");
    var userP=localStorage.getItem("usrPassword");
    if(usreName==userN)
    {
        FP.style.color = "black"
        FP.textContent="Your Password is: "+userP;
    }else{
        FP.style.color = "red"
        FP.textContent="Invalid UserName: "+usreName;
       
        
    }
   /* Email.send({
        Host: "smtp.gmail.com",
        Username : "Your Gmail Address",
        Password : "Your Gmail Password",
        To : 'recipient_1_email_address, recipient_2_email_address',
        From : "sender’s email address",
        Subject : "email subject",
        Body : "email body",
        }).then(
            message => alert("mail sent successfully")
        )*/

}