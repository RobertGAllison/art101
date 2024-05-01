// Lab6.js - For Task 2 of Lab 6
// Author: Robert G. Allison
// Date: 4/30/2024

// Constants:
//  myMainRide, myTransport

// Functions:
//  Function for calculating car age

const myTransport[];
      myTransport[0]="Legs";
      myTransport[1]="Skateboard";
      myTransport[2]="Bus";
      myTransport[3]="Car";

const myMainRide={
      make:"Honda",
      model:"Civic",
      color:"Champagne",
      year: 2004,
      age: function(){
           return 2024 - this.year;
      }
};

//Output Below:

document.writeln("Kinds of Transportation I Use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

