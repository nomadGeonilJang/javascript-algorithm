function solution(arr){  
    const result= [1,1,1,1,1]
   for(let i = 0 ; i < arr.length ; i++){
        const target = arr[i];
        let cnt = arr.length;
        for(let j = 0 ; j < arr.length ; j++){
            if(target < arr[j]){
                result[i]++;
            }
        }
        
   }
   return result
}


console.log(solution([92, 92, 92, 100, 76]));