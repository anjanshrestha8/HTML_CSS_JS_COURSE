
function validate(){
    let a = document.getElementById("email").value;
    let b = document.getElementById("pass");
    console.log(a);
    console.log(b);
    console.log("error");
    let RegExp=/^[a-zA-z0-9]+@[a-z]+\.[a-z]$/;
    let RegExp1=/^[a-zA-Z0-9]{8,12}$/;
        if( RegExp.test(a)){
        alert("login");
    }
    else{
        alert("error");
    }
}
