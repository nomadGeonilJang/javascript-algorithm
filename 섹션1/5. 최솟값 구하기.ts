function solution5(arr:number[]){       
    // const min = Math.min(...arr); //내장함수 추가
    // const min = Math.min.apply(null, arr);
    let answer = arr[0];
    for(let i = 1 ; i < arr.length ; i++){
        if(answer > arr[i]){
            answer = arr[i]
        }
    }
    return answer
}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution5(arr));