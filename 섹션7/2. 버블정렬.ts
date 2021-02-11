(()=>{
    //인접한 값 두 개 가 교환
    function solution(arr:number[]){
       for(let i = 0 ; i < arr.length - 1; i++){
           for(let j = 0 ; j < arr.length -1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j] , arr[j+1] ] = [arr[j+1], arr[j]]
            }
           }
       }
       return arr
    }

    let arr=[13, 5, 11, 7, 23, 15,20,22,1,2,44];
    console.time("bubble")
    console.log(solution(arr));
    console.timeEnd("bubble")

})()