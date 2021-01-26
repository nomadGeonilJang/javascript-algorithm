function solution1(...arg:number[]){
    let answer = 101
    for(let i = 0 ; i < arg.length; i++){
        if(answer > arg[i]){
            answer = arg[i]
        }
    }
    return answer
}

console.log(solution1(2, 5, 1));