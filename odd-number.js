function showOddNumber() {
    var odd1= parseInt(document.getElementById("odd1").value);
    var odd2 = parseInt(document.getElementById("odd2").value);
    var result = "";

    for (var i = odd1; i <= odd2; i++) {
        if (i % 2 == 1) {
            result += i + " "; // Add a space after each even number
        }
    }

    document.getElementById("demo3").innerHTML = result;
}
