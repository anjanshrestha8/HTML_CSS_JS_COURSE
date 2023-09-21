

function player1(){
    var a =Math.random()*1000; // create random number up to 1000
    a=parseInt(a);
    document.getElementById("field1").value=a;
    compare();
}



function player2(){
    var a =Math.random()*1000;
    a=parseInt(a);
    document.getElementById("field2").value=a;
    compare();
}



function compare(){
    var a=document.getElementById("field1").value;
    var b = document.getElementById("field2").value;
    if(a!=""&&b!=""){
        if(a>b){
            document.getElementById("result").innerHTML="Player 1 is winner...🏆";
            // document.getElementById("result").Value="Player 1 is winner...🏆";
        }
        else if(b>a){
            document.getElementById("result").innerHTML="Player 2 is winner...🏆"
            // document.getElementById("result").value="Player 2 is winner...🏆"
        }
        else{
            document.getElementById("result").innerHTML="Its Draw...."
            // document.getElementById("result").value="Its Draw...."
        }
    }
}