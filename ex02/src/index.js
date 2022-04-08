// Only change code below this code
var myStr = "Paragon is the best!";
function useMethods(str){
    var myReverse = str.split("");
    myReverse = myReverse.reverse();
    myReverse = myReverse.join("");
    var nova = myReverse;
    nova = nova.split(" ");
    var countCharacters = nova.map(x => x.length);
    return [myReverse, countCharacters];
}

console.log(useMethods(myStr));
// Only change code above this code
module.exports = useMethods;

