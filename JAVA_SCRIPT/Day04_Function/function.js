function addition(){
    var a =document.getElementById("first").value;
    var b = document.getElementById("second").value;
    a=parseInt(a);
    b=parseInt(b);
    var sum =a+b;
    // document.write(sum);
    document.getElementById("add").value=sum;
    // document.getElementById("para").innerHTML=sum;

}
function subtraction(){
    var a=document.getElementById("first").value;
    var b = document.getElementById("second").value;
    a=parseInt(a);
    b=parseInt(b);
    var sub = a-b;
    document.getElementById("sub").value=sub;
}
function division(){
    var a= document.getElementById("first").value;
    var b = document.getElementById("second").value;

    var div = a/b;

    document.getElementById("div").value=div;

}
function multiplication(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;

    var mul = a*b;

    document.getElementById("mul").value=mul;

}