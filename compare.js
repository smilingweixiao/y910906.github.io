var a = prompt("a?");
var b = prompt("b?");


function compare(a,b){
    if(a>b)
    {return "a大於b";}
    else if(a<b)
    {return "a小於b";}
    else
    {return "a等於b";}
}



console.log(compare(a,b));