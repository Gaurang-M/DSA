var fibo = function(n){
    if(n < 2){
        return n;
    }
    return fibo(n - 1) + fibo(n - 2)
}

//console.log(fibo(4))

var f = function(n){
    if(n===0){
        return;
    }
    f(n-1);
    console.log(n);
}

f(5);