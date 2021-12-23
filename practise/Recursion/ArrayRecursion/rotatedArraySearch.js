var search = function(arr, target, start, end){
    if(start > end){
        return -1;
    }

    var mid = Math.floor(end + (start - end)/2);

    if(arr[mid] == target){
        return mid;
    }

    if(arr[start] <= arr[mid]){
        if(target >= arr[start] && target <= arr[mid]){
            return search(arr, target, start, mid-1)
        }else{
            return  search(arr, target, mid+1, end)
        }
    }

    if(target >= arr[mid] &&  target <= arr[end]){
        search(arr, target, mid+1, end)
    }

    return search(arr, target, start, mid-1)
}

var arr = [5,6,7,8,9,1,2,3]
console.log(search(arr, 9, 0, arr.length-1));