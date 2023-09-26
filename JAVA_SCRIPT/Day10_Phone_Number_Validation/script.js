
function valid(){
    var username = document.getElementById("user").value;
    var phonenumber = document.getElementById("phone").value;

    var regExp=/^([a-z A-z 0-9\._-]+)/;
    var regExp1 =/^([0-9]+)/;

    var usernameValid = regExp.test(username);
    var phonenumberValid = regExp1.test(phonenumber);
    if(usernameValid && phonenumberValid){
        alert("Your user name and phone number is verified!!!!!!!!!");
        return true;
    }
    else{
        if(!usernameValid){
            alert("Your user name is invalid !!!!!!!!");
            document.getElementById("user").value=" ";
            user.style.border="solid 2px Red";

        }
        else{
            alert("Your phone number is invalid !!!!!!!!");
            document.getElementById("phone").value=" ";
            phone.style.border="solid 2px Red";

        }
        
    }

}