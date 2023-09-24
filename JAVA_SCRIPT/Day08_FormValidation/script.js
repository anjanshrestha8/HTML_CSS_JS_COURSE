

function Validation(){
    var username = document.getElementById("f1");
    var password = document.getElementById("f2");
    if(username.value.length<6){
        alert("Input your Full Name");
        return false;
    }
    else if(password.value.length<8){
        alert("Enter atleast 8 digits");
        document.getElementById("f2").value="";
        password.style.border="solid 2px Red";
        return false;
    }
    else{
        return true;
    }

}


