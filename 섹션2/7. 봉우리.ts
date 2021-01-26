function check(arr:number[][], row, col):boolean{
    const target = arr[row][col]
    const dx = [-1,0,1,0];
    const dy = [0, 1,0,-1];
    let flag = true;
    for(let k = 0 ; k < 4 ; k++){
        const nx = row + dx[k];
        const ny = col + dy[k];
        if(nx >= 0 && nx < arr.length && ny >= 0 && ny < arr.length && arr[nx][ny] >= target){
            flag = false;
            break;
        }
    }
    return flag
}

function solution(arr:number[][]){  
    let answer = 0;
    const len =  arr.length;

    for(let row = 0 ; row < len ; row++){
        for(let col = 0 ; col < len ; col++){
            if(check(arr, row, col)){
                answer++;
            }
        }
    }

    return answer
}


console.log(solution([[5, 3, 7, 2, 3], 
                        [3, 7, 1, 6, 1],
                        [7, 2, 5, 3, 4],
                        [4, 3, 6, 4, 1],
                        [8, 7, 3, 5, 2]]));