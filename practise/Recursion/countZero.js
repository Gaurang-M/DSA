var countZero = function(n , count){
    if(n === 0){
        return count;
    };
    if(n%10 == 0){
        return countZero(Math.floor(n/10), ++count)
    }else{
        return countZero(Math.floor(n/10), count)
    }
};

console.log(countZero(1030004, 0));