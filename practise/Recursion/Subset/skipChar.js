var skipChar = function(str,target,ans,i){
    if(i == str.length){
        return ans
    }
    if(str[i] == target){
        return strBuilder(str, target, ans, ++i );
    }else{
        return strBuilder(str, target, ans+str[i], ++i );
    }
     
}

// TBD
var skipApple = function(str,target,ans,i){
    if(i == str.length){
        return ans
    }
    if(str[i] == target){
        return strBuilder(str, target, ans, ++i );
    }else{
        return strBuilder(str, target, ans+str[i], ++i );
    }
     
}

console.log(strBuilder("accah","a","",0));