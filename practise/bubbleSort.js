// in each pass, keep swapping the indexes one by one. Each paas will make the highest item at the top. 
// ignore that in each pass

var bubbleSort = function(arr){
    var i=0;
    var swaped = false;
    for(i = arr.length-1; i >= 0; i--){
        swaped = false;
        for(j=1; j<=i; j++){
            if(arr[j] < arr[j-1]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
                swaped = true
            }
        }
        if(!swaped){
            break;
        }
    }
    return arr;
}

//O(n2) worse case
//O(n) best case

var arr = [1,2,3,4,5,6]
console.log(bubbleSort(arr));