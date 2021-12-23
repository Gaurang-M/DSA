var linearSearch = function(arr, index, target){

    if(arr[index] === target){
        return index;
    }

    if(arr.length === index+1){
        return -1;
    }

    return linearSearch(arr, index+1, target);
    
}

//Linear search multiple occurences

// var linearSearchMultipleOccurences = function(arr, index, target, occurences){

//     if(arr[index] === target){
//         occurences.push(index);
//     }

//     if(arr.length === index+1){
//         return occurences;
//     }

//     return linearSearchMultipleOccurences(arr, index+1, target, occurences);
// }

//Linear search multiple occurences initialising occurences inside body

var linearSearchMultipleOccurences = function(arr, index, target){
    //var occurences = [...lastEval]; //es6
    var occurences = [];
    // if(lastEval){
    //     occurences = occurences.concat(lastEval);
    // }

    if(arr[index] === target){
        occurences.push(index);
    }

    if(arr.length === index+1){
        return occurences;
    }

    occurences = occurences.concat(linearSearchMultipleOccurences(arr, index+1, target));
    return occurences;
}

console.log(linearSearchMultipleOccurences([1,3,5,6,6,6,9,6], 0, 6));