// in each pass, find max & swap with the correct position.
// ist go search max in 0 - 5 i.e. entire array & put the number in 5th index

var selectionSort = function(arr){
    for(var i = arr.length-1; i >= 0; i--){
        for(var j = 0; j <= i; j++){
            var max = getMax(j,i,arr);
            arr = swap(max, i, arr)
        }
    }
    return arr;
}

var getMax = function(start,end,arr){
    var max = 0;
    for(var i=start; i<=end; i++){
        if(arr[max] < arr[i]){
            max = i;
        }
    }
    return max;
}

var swap = function(max, swapIndex, arr){
    var temp = arr[max];
    arr[max] = arr[swapIndex];
    arr[swapIndex] = temp;
    return arr;
}

//O(n2) best case

var arr = [2,3,1,6,-7,5]
console.log(selectionSort(arr));