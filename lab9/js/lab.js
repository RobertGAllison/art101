/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Author: Robert G. Allison
   Date: 2024
*/
$("#challenges").append("<button id='button-challenge'>Make Crasy</button>");
$("button-challenge").click(function(){
    alert("I cannot make this any crasier");
});

$("#problems").append("<button id='button-challenge'>Make Funky</button>");
$("button-challenge").click(function(){
    alert("I cannot make this any funkier");
});

$("#results").append("<button id='button-challenge'>Make Cool</button>");
$("button-challenge").click(function(){
    alert("I cannot make this any cooler");
});
