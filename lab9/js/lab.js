/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Author: Robert G. Allison
   Date: 2024
*/
$("#challenges").append("<button id='button-challenge'>Make Crasy</button>");
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenges").toggleClass("special");
});
$("#challenges").on("click", function(){
    alert("Cant make it Crasier, dawg.")
});

$("#problems").append("<button id='button-challenge'>Make Funky</button>");
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});
$("#problems").on("click", function(){
    alert("Cant make it Funkier, man.")
});

$("#results").append("<button id='button-challenge'>Make Cool</button>");
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});
$("#results").on("click", function(){
    alert("Cant make it Cooler, dude.")
});