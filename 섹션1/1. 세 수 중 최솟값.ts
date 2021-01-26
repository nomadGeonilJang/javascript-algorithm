function solution(a, b, c){
    const arr = [a,b,c];
    let answer = 101
    for(let i = 0 ; i < arr.length; i++){
        if(answer > arr[i]){
            answer = arr[i]
        }
    }
    return answer
}

console.log(solution(2, 5, 1));