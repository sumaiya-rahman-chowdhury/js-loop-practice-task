var mobileNames =["Oppo","Iphone","Samsung","Vivo"];
var i = 0;
var result = "";
while( i<mobileNames.length)
{
    result += mobileNames[i] + " ";
    i++;
}
document.getElementById("demo4").innerHTML = result;
