var sort = function(arr, row, column, maxIndex){
    if(row == 0){
        return arr;
    }
    if(row > column){
        if(arr[column] > arr[maxIndex]){
            maxIndex = column;
        }
        return sort(arr, row, ++column, maxIndex);
    }else{
        
        var temp = arr[row-1];
        arr[row - 1] = arr[maxIndex];
        arr[maxIndex] = temp ;
        
        return sort(arr, --row, 0, 0);
    }

}

console.log(sort([4,3,2,1], 4, 0, 0));
