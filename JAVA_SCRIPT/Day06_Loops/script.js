
function Multiple(){
    var a = document.getElementById("field").value;
   
    a=parseInt(a);
    var display=" ";
    
    for(let i =1;i<=20;i++){
        
        var result = a*i;
        display+= a + " * " + i +" = "+ result+"<br>";
        document.getElementById("result").innerHTML=display;
    }
}