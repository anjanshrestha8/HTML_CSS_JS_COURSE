
function valid(){
    var username = document.getElementById("user").value;
    var phonenumber = document.getElementById("phone").value;

    var regExp=/^([a-z A-z 0-9\._-]+)/;
    var regExp1 =/^([0-9]+)/;
    if(regExp.test(username) &&  regExp1.test(phonenumber)){
        alert("Your username is valid");
        return true;
    }
    else{
        alert("Please check our username and phone number");
    
    }

}