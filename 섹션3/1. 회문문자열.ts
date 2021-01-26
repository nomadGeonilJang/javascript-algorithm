function solution(s:string){
    let answer = true;
    const target= s.toLocaleLowerCase();
    for(let i = 0 ; i < Math.floor(target.length / 2) ; i++){
        if(target[i] !== target[target.length - i - 1]){
            answer = false;
            break
        }
    }
    return answer
}

console.log(solution("goooG"));