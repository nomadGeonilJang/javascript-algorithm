function solution6(arr:number[]){
    const oddNumbers:number[] = []
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] % 2 !== 0){
            oddNumbers.push(arr[i])
        }
    }
    return oddNumbers
}

console.log(solution6([12, 77, 38, 41, 53, 92, 85]));