var nickname = "Justine";
var height = 62;
var weight = 45;

var height1 = parseInt(62/12);
var height2 = 62%12;

weight = parseInt(weight*2.2);
weight = weight.toFixed(2);

function prob1() {
    alert("Name: " + nickname + " \nHeight: " + height1 + "\'" + height2 + "\"" + " \nWeight: " + weight + " lbs");
}