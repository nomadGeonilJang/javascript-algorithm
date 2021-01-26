{
    function solution22(arr){         
        const result:number[] = [arr[0]];
        for(let i = 1 ; i < arr.length ; i++){
            if(result[result.length - 1] < arr[i]){
                result.push(arr[i]);
            }
        }
        return result
    }


    console.log(solution22([130, 135, 148, 140, 145, 150, 150, 153]));
}