// Create an array here
var myArray = [2, 4, 0, 8, 10]; 
myArray[0]; // 2 
myArray[1]; // 4 
myArray[2]; // 0 
myArray[3]; // 8 
myArray[4]; // 10 
// End of creating an array

// Create a function below this line
function myArrayFunction(myItems){
    var myItems = myArray;
    myArray [2] = 6;
    return myItems;
}

myArrayFunction();
console.log(myArrayFunction());
// End of creating a function
module.exports = myArrayFunction;