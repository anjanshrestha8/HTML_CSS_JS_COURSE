function addition(){
    var a =document.getElementById("first").value;
    var b = document.getElementById("second").value;
    a=parseInt(a);
    b=parseInt(b);
    var sum =a+b;
    document.getElementById("result").innerHTML=a;
}