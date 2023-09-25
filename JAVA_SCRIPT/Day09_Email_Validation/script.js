function valid(){
    var email =document.getElementById("user").value;
    var regExp = /^([a-z A-Z 0-9 \. _ -]+) @([a-z 0-9 ]+ .) ([a-z]+ .) ([a-z]?)$/;
    if(regExp.test(email)){
        alert("valid email");
        return true;
    }
    else{
        alert("Input valid email");
        document.getElementById("user").value= " ";
        return false;
    }

}