function solution(arr:number[][]){  
    let answer = 0;
    let n = arr.length;
    let sum1 = 0;
    let sum2 = 0;

    //행탑색 열탐색;
    for(let i = 0 ; i < n ; i++){
        sum1 = 0;
        sum2 = 0;
        for(let j = 0 ; j < n ; j++){
            sum1 += arr[i][j]
            sum2 += arr[j][i]
        }
        answer = Math.max(answer, sum1, sum2);
    }
    //대각선 탐색
    sum1 = 0;
    sum2 = 0;
    for(let k = 0 ; k < n ; k++){
        sum1 += arr[k][k]
        sum2 += arr[n - k - 1][n - k - 1]
    }
    answer = Math.max(answer, sum1, sum2)

    return answer
}


console.log(solution([[10, 13, 10, 12, 15], 
                    [12, 39, 30, 23, 11],
                    [11, 25, 50, 53, 15],
                    [19, 27, 29, 37, 27],
                    [19, 13, 30, 13, 19]]));