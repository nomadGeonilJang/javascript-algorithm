function solution4(n){
    let answer = 0;
    for(let i = 1 ; i <= n ; ++i){
        answer +=i;
    }
    return answer
}

console.log(solution4(10));