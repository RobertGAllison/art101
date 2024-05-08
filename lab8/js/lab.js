/**
 * BY ROBERT G ALLISON
 * MAY 7TH 2024
 * LAB 8 JS FILE
 */

//cool function

function CoolSquareFunction(x){
    var results= x*x;
    return results;
};

//test function
console.log("Whats 22 squared?", CoolSquareFunction(22));
console.log("Whats 4 squared?", CoolSquareFunction(4));

//array
array = [22, 4, 10, 5, 30];
console.log("My array: ", array);

var result = array.map(CoolSquareFunction);

console.log("Squared array: ", results);

//
var result = array.map(function(x){
    return x*2;
});

console.log("Array times two: ", result);