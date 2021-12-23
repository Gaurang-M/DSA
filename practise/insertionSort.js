// in each pass keep swapping greates number to the botton. 
// start -> check&swapGreater(arr[0],arr[1]) tartgetIndex=arr[1]
// then -> check&swapGreater[arr[0], arr[1], arr[2]] tartgetIndex=arr[2] ....

var insertionSort = function(arr){
    for(var i= arr.length-1; i >=0; i--){
        for(var j=1; j<=i; j++){
            arr = sort(j,arr);
        }
    }
    return arr;
}

var sort = function(targetIndex,arr){
    var start = 0;
    for(var i=start; i<targetIndex; i++){
        if(arr[i] > arr[targetIndex]){
            var temp = arr[targetIndex];
            arr[targetIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

var arr = [22,-3,1,6,-7,5]
console.log(insertionSort(arr));