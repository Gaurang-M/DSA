
// var binarySearchRecursion = function(arr, target, left, right){
//     if(left > right){
//         return -1;
//     }

//     var mid = parseInt(left + ((right - left)/2));
    
//     if(arr[mid] < target){
//         left = mid + 1;
//         return binarySearch(arr, target, left, right);
//     }else if(arr[mid] > target){
//         right = mid - 1; 
//         return binarySearch(arr, target, left, right);
//     }else{
//         return mid;
//     }
    
// }


var binarySearchRecursion = function(arr, target, start, end){


    var mid = parseInt(start + (end - start)/2)
    if(arr[mid]<target){
        return binarySearchRecursion(arr, target, mid+1, end);
    }else if(arr[mid]>target){
        return binarySearchRecursion(arr, target, start , mid-1);
    }else{
        return mid;
    }
}


var binarSearchIterative = function(arr, target, start, end, isAsc){
    
    while(start <= end){
        var mid = parseInt(start + (end - start)/2);
        if(arr[mid] === target){
            return mid
        }
        
        if(isAsc){
            if(arr[mid] < target){
                start = mid+1
            }else{
                end = mid-1
            }
        }else{
            if(arr[mid] < target){
                end = mid-1
            }else{
                start = mid+1
            }
        }
    }
    return -1;
}

//finiding cieling of the number
var cieling = function(arr, target, left, right){

    while(left <= right){
        var mid = parseInt(left + (right - left)/2);
        if(arr[mid] == target){
            return arr[mid];
        }else if(arr[mid] < target){
            left = mid + 1;
        }else{
            right = mid -1;
        }
    }
    return arr[left];
}

//finiding floor of the number
var floor = function(arr, target, left, right){

    while(left <= right){
        var mid = parseInt(left + (right - left)/2);
        if(arr[mid] == target){
            return arr[mid];
        }else if(arr[mid] < target){
            left = mid + 1;
        }else{
            right = mid -1;
        }
    }
    return arr[right];
}

var nextGreatestLetter = function(arr, target) {
    
     var left = 0;
     var right = arr.length-1;
    while(left <= right){
      var mid = parseInt(left + (right - left)/2);
       if(arr[mid] > target){
        right = mid -1;
        
       }else{
        left = mid + 1;  
       }
     }
     return arr[left % arr.length];


};

var firstLastOccurenaces = function(arr, target) {
    var ans = [-1, -1];
    ans[0] = BsearchTofindfiesrAndlastOcurence(arr, target, true);
    if(ans[0] !== -1){
        ans[1] = BsearchTofindfiesrAndlastOcurence(arr, target);
    }
    return ans;

};
var BsearchTofindfiesrAndlastOcurence = function(arr, target, findStart){
    var ans = -1;
    var left = 0;
    var right = arr.length-1;
   while(left <= right){
     var mid = parseInt(left + (right - left)/2);
      if(arr[mid] > target){
       right = mid -1;
      }else if(arr[mid] < target){
       left = mid + 1;  
      }else{
          ans = mid;
          if(findStart){
              right = mid -1;
          }else{
              left = mid +1;
          }
      }
    }
    return ans;
}

var binarySearchWhereArrisInfinite = function(arr, target){
    var start = 0;
    var end = 1;

    while(arr[end] < target){
        var newStart = end + 1;
        end = end + (end - start + 1) * 2;
        start = newStart;
    }

    return binarSearchIterative(arr, target, start, end);
}

var maximuPeakinMonuntainArray = function(arr){
    var start = 0;
    var end = arr.length - 1;

    while(start < end){
        var mid = parseInt(start + (end - start)/2);
        if(arr[mid] < arr[mid + 1]){
            start = mid + 1;
        }else{
            end = mid;
        }
    }

    return  start;
}

var findInMountainArray = function(arr, target){
    var foundIndex = -1;
    var peak = maximuPeakinMonuntainArray(arr);
    foundIndex = binarSearchIterative( arr, target, 0, peak, true);
    if(foundIndex === -1){
        foundIndex = binarSearchIterative( arr, target, peak+1, arr.length-1);
    }
    return foundIndex;
}

var findSortedArryIndex = function(arr){
    var start = 0;
    var end = arr.length - 1;

    while(start < end){
        var mid = parseInt(start + (end - start)/2);
        if(mid > end && arr[mid] > arr[mid + 1]){
            return mid;
        }else if(mid < end && arr[mid] < arr[mid-1]){
            return mid - 1;
        }else if(arr[start] < arr[mid]){
            start = mid + 1;
        }else{
            end =  mid - 1;
        }
    }
    return  start;
}

var searchInRotatedSortArray = function(arr, target){
    var foundIndex = -1;
    var index = findSortedArryIndex(arr);
    foundIndex = binarSearchIterative( arr, target, 0, index, true);
    if(foundIndex === -1){
        foundIndex = binarSearchIterative( arr, target, index+1, arr.length-1, true);
    }
    return foundIndex;
}

var timesTheArryisSorted = function(arr){
    return findSortedArryIndex(arr)+1;
}



var arr = [1,3,34,23,56,78,99];
console.log(binarySearchRecursion(arr, 99, 0, arr.length-1));