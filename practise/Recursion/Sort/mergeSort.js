// divide an arry in two parts & the merge it
//

var merge = function(leftArr, rightArr){
    var i = 0;
    var j = 0;
    var k = 0;
    var mergedArr = [];
    
    while(i < leftArr.length && j < rightArr.length){
        if(leftArr[i] < rightArr[j]){
            mergedArr[k] = leftArr[i]; 
            i++;
        }else{
            mergedArr[k] = rightArr[j]; 
            j++;
        }
        k++;
    }

    while(i < leftArr.length){
       mergedArr[k] = leftArr[i];
       i++;
       k++;
    }

    while(j < rightArr.length){
        mergedArr[k] = rightArr[j]; 
        j++;
        k++;
    }

    return mergedArr;
}

var mergeSort = function(arr){
    if(arr.length == 1){
        return arr;
    }

    var mid = Math.floor(arr.length / 2);

    var leftArr = mergeSort(arr.slice(0,mid));
    var rigthArr = mergeSort(arr.slice(mid));

    return merge(leftArr, rigthArr);
}






console.log(mergeSort([5,4,3,2,1]));