function solution(arr:number[]){         
    const result:number[] = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        if(arr[i - 1] > arr[i]){
            result.push(arr[i])
        }
    }
    return result
}


console.log(solution([7, 3, 9, 5, 6, 12]));