function solution8(arr:number[]){
    const length = arr.length
    const answer = [...arr];
    const sum = arr.reduce((a,b) =>a+b);
    
    for(let i = 0 ; i < length - 1; i++){
        for(let j = i + 1 ; j < length ; j++){
            if(sum - (arr[i] + arr[j]) === 100){
                console.log(arr[i], arr[j])
                answer.splice(j,1)
                answer.splice(i ,1)
            }
        }
    }
    return answer;
}

console.log(solution8([20, 7, 23, 19, 10, 15, 25, 8, 13]))
/**
 *  splice 뒤에꺼를 먼저 제거 하면 앞 쪽 인덱스는 영향을 받지 않는다.
 * 
 */
