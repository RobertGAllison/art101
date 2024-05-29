/**
 * 
 * Author: Robert G. Allison
 * Tuesday May 28th
 * For Art 101: Programming
 * W/ Help from CHATGPT
 */

function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;
    var house;

    if (mod === 0) {
        house = "Gryffindor";
    } else if (mod === 1) {
        house = "Ravenclaw";
    } else if (mod === 2) {
        house = "Slytherin";
    } else {
        house = "Hufflepuff";
    }

    return house;
};

document.getElementById("button").addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    var output = document.getElementById("output");
    output.innerHTML = "<p>The Sorting Hat has sorted you into " + house + "</p>";
});