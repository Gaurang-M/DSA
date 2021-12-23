var insertionSort = function(arr){
    for(var i=arr.length-1; i>=0; i--){
        for(var j=1; j<=i; j++){
            arr = sort(j,arr);
        }
    }
    return arr;
}

var sort = function(targetIndex, arr){
    var start = 0;
    for(var i =start; i <= targetIndex; i++){
        if(arr[i] > arr[targetIndex]){
            var temp = arr[i];
            arr[i] = arr[targetIndex];
            arr[targetIndex] = temp;
        }
    }
    return arr;
}

var arr = [22,-3,1,6,-7,5]
console.log(insertionSort(arr));