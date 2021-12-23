var sort = function(arr, row, column){ // recursively call patternNew(row, col) . this a pattern question ditto
    if(row === 0){
        return arr;
    }
    if(row > column){
        if(arr[column] > arr[column +1]){
            var temp = arr[column];
            arr[column]  = arr[column + 1];
            arr[column + 1] = temp;

        }
        return sort(arr, row, ++column);
    }else{
        return sort(arr, --row, 0);
    }
}

console.log(sort([4,3,2,1], 4, 0));