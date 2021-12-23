var subseq = function(processed, unprocessed){
    if(unprocessed.length == 0){
        console.log(processed);
        return
    }
    var ch = unprocessed.charAt(0);
    
    subseq(processed+ch, unprocessed.substr(1));
    subseq(processed, unprocessed.substr(1));
}

var subseqAsciisubseqArray = function(processed, unprocessed){
    if(unprocessed.length == 0){
        return processed;
    }
    var arr = [];
    var ch = unprocessed.charAt(0);
    
    arr = arr.concat(subseqArray(processed+ch, unprocessed.substr(1)));
    arr = arr.concat(subseqArray(processed, unprocessed.substr(1)));
    return arr;
}

var subseqAscii = function(processed, unprocessed){
    if(unprocessed.length == 0){
        return processed;
    }
    var ch = unprocessed.charAt(0);
    var arr = [];
    
    arr = arr.concat(subseqAscii(processed+ch, unprocessed.substr(1)));
    arr = arr.concat(subseqAscii(processed, unprocessed.substr(1)));
    arr = arr.concat(subseqAscii(processed+ch.charCodeAt(0), unprocessed.substr(1)));
    return arr;
}

var subsequenceIteration = function(str){
    var arr = [str];
    for(j=0; j<=str.length-1; j++){
        arr.push(str[j]);
        for(i=j+1; i<=str.length-1; i++){
            arr.push(str[j]+str[i]);
        }
    }
    return arr;
}

console.log(subsequenceIteration("abcd"));