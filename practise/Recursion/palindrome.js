var reverse = function(n){
    if(n%10 === n){
        return n;
    }
    return parseInt((n%10).toString() + reverse(Math.floor(n/10)).toString());
}

var isPalindromeUsingReverse = function(n){
    return n === reverse(n);
}

var isPalindromeUsingRecursion = function(n){
    if (!n){
        return true;
    }
    var start = n.charAt(0);
    var end = n.charAt(n.length - 1);
    if(start === end){
        var val = n.substr(1, n.length - 2);
        return isPalindromeUsingRecursion(val);
    }else{
        return false;
    }
}

var numbers = 12321;
console.log(isPalindromeUsingRecursion(numbers.toString()));