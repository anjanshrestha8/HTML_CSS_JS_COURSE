
function submit(){
    var regExp=/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]) [A-Za-z\d!@#$%^&*()_+]{8,}$/;

    let a= document.getElementById('username').value;
    var b= document.getElementById('password').value;
   
    console.log("pass" + b);
    if(regExp.test(b)){
        alert("valid Password");
        
    }
    else{
        alert(" Invalid Password");
    }

}