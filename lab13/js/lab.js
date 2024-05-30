/**
 * Robert G Allison
 * Tuesday May 28th
 * Javscript for Lab13
 * Major Help From: CHATGPT
 */

function fizzBuzz() {
    var output = "";
    for (var i = 1; i <= 200; i++) {
        var str = "";
        if (i % 3 === 0) {
            str += "Fizz";
        }
        if (i % 5 === 0) {
            str += "Buzz";
        }
        if (i % 7 === 0) {
            str += "Boom";
        }
        if (str === "") {
            str = i.toString();
        }
        output += "<p>" + str + "</p>";
    }
    document.getElementById("output").innerHTML = output;
    str += "Fizz";
$("#output").append("<p>" + str + "</p>");
}
fizzBuzz();