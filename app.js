function showNumber(){
    var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var result= "";
for (var i = num1; i <= num2; i++) {

    result += i + " ";
   

}
document.getElementById("demo").innerHTML = result;

}