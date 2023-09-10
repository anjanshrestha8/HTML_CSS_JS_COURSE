function finding(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var c = document.getElementById("third").value;


    if(a>b && a>c){
        document.getElementById("largest").value=a;
    }
    else if(b>a&&b>c){
        document.getElementById("largest").value=b;

    }
    else{
        document.getElementById("largest").value=c;
    }
}