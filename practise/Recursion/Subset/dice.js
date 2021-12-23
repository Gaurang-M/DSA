var dice = function(processed, unprocessed){
    if(unprocessed == 0){
        console.log(processed);
        return;
    }
    for(var i=1; i<=unprocessed ; i++){
        dice(processed + i, unprocessed - i);
    }
}

dice("",6);