var numberOfSteps = function(n, step){
    if(n == 0){
        return step;
    }
    if(n%2 == 0){ // even
        return numberOfSteps(n/2, ++step);
    }else{ //Odd
        return numberOfSteps(--n, ++step)
    }
}

console.log(numberOfSteps(14, 0));