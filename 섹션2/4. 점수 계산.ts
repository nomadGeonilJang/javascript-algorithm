function solution24(arr:number[]){         
    let score = 0;
    let cnt = 0;
    for(const x of arr){
        if(x === 1){
            cnt +=1
            score += cnt;
        }else{
            cnt = 0;
        }
    }
    return score    
}
console.log(solution24([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));