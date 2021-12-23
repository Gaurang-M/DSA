// Quicck sort is inplace algo. here we decide a Pivot i.e. mid &  then adjust the miod in correct position.

var sort = function(arr, low, high){
    if(low >= high){
        return arr;
    }

    var start = low;
    var end = high;

    var mid = Math.floor(low + (high - low)/2);
    var pivot = arr[mid];

    while(start <= end){
        while(arr[start] < pivot){
            start++;
        }
        while(arr[end] > pivot){
            end--;
        }
        if(start <= end){
            var temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    sort(arr, low, end);
    sort(arr, start, high);
}

var arr = [5,4,3,2,1,19];

sort(arr, 0, arr.length-1);
//console.log(sort(arr, 0, arr.length-1));
console.log(arr);