var isSorted = function(arr, index){
    if(arr.length === index+1){
        return true
    }
    return arr[index] <= arr[index + 1] && isSorted(arr, index + 1);
}

console.log(isSorted([1,2,3,4,6,8],0));