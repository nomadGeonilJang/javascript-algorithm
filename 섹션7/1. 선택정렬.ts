(()=>{
    //선출된 i 값 과 바꿀 값의 index를 선출 한다.
    function solution(arr:number[]){
      for(let i = 0 ; i < arr.length -1 ; i++){
          let min = i
          for(let j = i + 1; j < arr.length; j++){
              if(arr[min] > arr[j]){
                 min = j
              }
          }
          [arr[i], arr[min]] = [arr[min], arr[i]]
      }
      return arr
    }
    
    let arr=[13, 5, 11, 7, 23, 15];
    console.log(solution(arr));
})()