function solution7(day:number, arr:number[]){
    const answer:number[] = [];

    for(const x of arr){
        if(x % 10 === day){
            answer.push(x)
        }
    }
    return answer
}
console.log(solution7(3, [25, 23, 11, 47, 53, 17, 33]));