var merge = function(arr, start, mid, end){
    var i = start;
    var j = mid + 1;
    var k=0;
    var mergedArr = [];

    while(i <= mid && j <= end ){
        if(arr[i] < arr[j]){
            mergedArr[k] = arr[i];
            i++;
        }else{
            mergedArr[k] = arr[j];
            j++;
        }
        k++;
    }

    while(i <= mid){
        mergedArr[k] = arr[i];
        i++;
        k++;
    }

    while(j <= end){
        mergedArr[k] = arr[j];
        j++;
        k++;
    }

    for(l=0; l< mergedArr.length; l++){
        arr[start+l] = mergedArr[l];
    }

    return arr;

}


var mergeSort = function(arr, start, end){
    if(start == end){
        return arr;
    }

    var mid = Math.floor(end + (start - end)/2);

    mergeSort(arr, start, mid);
    mergeSort(arr, mid+1, end);

    return merge(arr, start, mid, end);
}

var arr = [5,4,3,2,1,19];
console.log(mergeSort(arr, 0, arr.length-1));