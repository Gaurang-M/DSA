// var sumOfDigit = function(n){
//     if(n.toString().length === 1){
//         return n;
//     }
//     return parseInt(n.toString()[0]) + sumOfDigit(parseInt(n.toString().substr(1)));
// }

var sumOfDigit = function(n){
    if(n === 0){
        return n;
    }
    return n%10 + sumOfDigit(Math.floor(n/10));
}

console.log(sumOfDigit(123));