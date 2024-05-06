//Hello! Function practice for Lab 7
//By: Robert G. Allison
//Date: Saturday May 4th
function sorting(){
    var username = window.prompt("Hello! Give me your name right now!");
    console.log("username =", username);
    //string-to-array
    var namearray = username.split('');
    console.log("namearray =", namearray);
    //sorting
    var namearraysort = namearray.sort();
    console.log("namearraysort =", namearraysort);
    //join array with string
    var namesorted = namearraysort.join('');
    console.log("namesorted =", namesorted);
    //return
    return namesorted;
};

//output
document.writeln("Fixed your dumb name. Here it is: ",
    sorting(), "</br>"
);