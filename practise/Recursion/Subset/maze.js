var mazeMaxPath = function(row, col){
    if(row == 1 || col == 1){
      return 1;
    }

    var left = mazeMaxPath(row-1, col);
    var right = mazeMaxPath(row, col-1);

    return left+right;
}



var mazeDirections = function(processed, row, col){
    if(row == 3 && col == 3){
        return processed;
    }

    var ans = [];

    if(row < 3){
        ans = ans.concat(mazeDirections(processed+"D", row+1, col));
    }

    if(col < 3){
        ans = ans.concat(mazeDirections(processed+"R", row, col+1));
    }

    return ans;
}

var mazeDirectionsDiagonal = function(processed, row, col){
    if(row == 1 && col == 1){
        return processed;
    }

    var ans = [];

    if(row > 1 && col > 1){
        ans = ans.concat(mazeDirections(processed+"D", row-1, col-1));
    }

    if(row > 1){
        ans = ans.concat(mazeDirections(processed+"V", row-1, col));
    }

    if(col > 1){
        ans = ans.concat(mazeDirections(processed+"H", row, col-1));
    }

    return ans;
}

var mazeWithObstacles = function(processed, row, col, maze){ // 2d arr // maze = [[true,true,true][true,false,true][true,true,true]]
    if(row == maze.length - 1 && col == maze[0].length - 1){
        return processed;
    }

    if(!maze[row][col]){
        return;
    }

    var ans = []

    if(row < maze.length - 1){
        ans = ans.concat(mazeWithObstacles(processed+"D", row+1, col, maze));
    }

    if(col < maze[0].length - 1){
        ans = ans.concat(mazeWithObstacles(processed+"R", row, col+1, maze));
    }

    return ans;
}

var mazeAllPaths = function(processed, row, col, maze){ // 2d arr // maze = [[true,true,true][true,false,true][true,true,true]]
    if(row == maze.length - 1 && col == maze[0].length - 1){
        //maze = [[true,true,true],[true,true,true],[true,true,true]]; 
        return processed;
    }

    if(!maze[row][col]){
        return;
    }else{
        maze[row][col] = false; // mark your path as false so it's not taken again
    }

    var ans = []

    if(row < maze.length - 1){
        ans = ans.concat(mazeAllPaths(processed+"D", row+1, col, maze));
    }

    if(col < maze[0].length - 1){
        ans = ans.concat(mazeAllPaths(processed+"R", row, col+1, maze));
    }

    if(row > 0){
        ans = ans.concat(mazeAllPaths(processed+"U", row-1, col, maze));
    }

    if(col > 0){
        ans = ans.concat(mazeAllPaths(processed+"L", row, col-1, maze));
    }

    maze[row][col] = true; // unmark your taken path for next path is executed. This is done while backtracking

    return ans;
}


var mazeAllPathsSteps = function(processed, row, col, maze, path, step){ // 2d arr // maze = [[true,true,true][true,false,true][true,true,true]]
    if(row == maze.length - 1 && col == maze[0].length - 1){
        //maze = [[true,true,true],[true,true,true],[true,true,true]];
        path[row][col] = step;
        
        for(var i=0; i<=path.length; i++){
            for(var j=0; j<=path[0].length; i++){
                console.log(path[i][j])
            }
            console.log("\n");
        }
        console.log("===================");
        return processed;
    }

    if(!maze[row][col]){
        return;
    }else{
        maze[row][col] = false; // mark your path as false so it's not taken again
        path[row][col] = step;
    }

    var ans = []

    if(row < maze.length - 1){
        ans = ans.concat(mazeAllPathsSteps(processed+"D", row+1, col, maze, path, step+1));
    }

    if(col < maze[0].length - 1){
        ans = ans.concat(mazeAllPathsSteps(processed+"R", row, col+1, maze, path, step+1));
    }

    if(row > 0){
        ans = ans.concat(mazeAllPathsSteps(processed+"U", row-1, col, maze, path, step+1));
    }

    if(col > 0){
        ans = ans.concat(mazeAllPathsSteps(processed+"L", row, col-1, maze, path, step+1));
    }

    maze[row][col] = true; // unmark your taken path for next path is executed. This is done while backtracking
    path[row][col] = null;
    
    return ans;
}



console.log(mazeAllPathsSteps("",0,0,[[true,true,true],[true,true,true],[true,true,true]], [[null, null, null],[null, null, null],[null, null, null]], 1));