function solution(str:string){
    let answer="";
    for(const x of str){
        if(!isNaN(Number(x))){
            answer += x;
        }
    }
   return Number(answer)
}
console.log(solution("g0en2T0s8eSoft"));