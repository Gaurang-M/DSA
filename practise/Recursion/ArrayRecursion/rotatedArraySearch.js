var search = function(arr, target, start, end){
    if(start > end){
        return -1;
    }

    var mid = Math.floor(end + (start - end)/2);

    if(arr[mid] == target){
        return mid;
    }

    if(arr[start] <= arr[mid]){ // Check if start & end range is in first half of the rotated array
        if(target >= arr[start] && target <= arr[mid]){ // if target is prensent in first half
            return search(arr, target, start, mid-1)
        }else{// if taregt present in second half
            return  search(arr, target, mid+1, end)
        }
    }

    if(target >= arr[mid] &&  target <= arr[end]){ // now the start & end range is in second half of the rotated array
        search(arr, target, mid+1, end) // if taregt present in second half
    }

    return search(arr, target, start, mid-1) // // if target is prensent in first half
}

var arr = [5,6,7,8,9,1,2,3]
console.log(search(arr, 9, 0, arr.length-1));