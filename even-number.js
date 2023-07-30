function showEvenNumber() {
    var even1= parseInt(document.getElementById("even1").value);
    var even2 = parseInt(document.getElementById("even2").value);
    var result = "";

    for (var i = even1; i <= even2; i++) {
        if (i % 2 == 0) {
            result += i + " "; // Add a space after each even number
        }
    }

    document.getElementById("demo2").innerHTML = result;
}
