var permutation = function(processed, unprocessed){
    if(unprocessed.length == 0) {
        return processed;
    }
    var ch = unprocessed.charAt(0);
    var ans = [];
    for(var j=0; j<=processed.length; j++){ 
        var start = processed.substr(0,j);
        var end = processed.substr(j);
        ans = ans.concat(permutation(start+ch+end, unprocessed.substr(1)));
    }
    return ans;
}

console.log(permutation("","abc"));