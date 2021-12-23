var phoneCombination = function(processed, unprocessed){
    if(unprocessed.length == 0){
        //console.log(processed);
        return processed;
    }

    var ch = parseInt(unprocessed.charAt(0));
    var ans = [];

    for(var i= (ch - 2)*3 ; i < (ch -1) * 3; i++){
        var char = String.fromCharCode("a".charCodeAt(0)+i);
        var ans = ans.concat(phoneCombination(processed + char, unprocessed.substr(1)));
    }
    return ans;
}

console.log(phoneCombination("","23"));