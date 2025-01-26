var fName;
var lName;
var bYear;

function prob2() {
    fName = prompt("First Name");
    lName = prompt("Last Name");
    bYear = prompt("Birth Year");

    console.log(fName + lName + bYear);

    bYear = 2025 - parseInt(bYear);

    document.getElementById("rep").innerHTML = "Hello " + fName + " " + lName + "! How does it feel to be " + bYear + " years old?";
}