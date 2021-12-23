/* 
****
***
**
*
*/

var pattern = function(x){ //first thought
    if(x  == 0){
        return;
    }
    var i = 0;
    var val = "";
    for(i; i < x; i++){
        val = val + "*";
    }
    console.log(val+"\n");
    pattern(--x);
}


var patternNew = function(row, column, val){ // recursively call patternNew(row, col) 
    if(row === 0){
        return;
    }
    if(row > column){
        val = val + "*";
        patternNew(row, ++column, val);
    }else{
        val = val + "\n";
        console.log(val); // reverse triangle
        patternNew(--row, 0, "");
        console.log(val); // triangle
    }
}

patternNew(4,0,"");