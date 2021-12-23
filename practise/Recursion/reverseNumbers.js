var reverse = function(n){
    if(n%10 === n){
        return n;
    }
    return  (n%10).toString() + reverse(Math.floor(n/10)).toString();
}

console.log(reverse(56473));