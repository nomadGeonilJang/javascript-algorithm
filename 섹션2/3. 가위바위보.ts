{
    function solution23(a:number[], b:number[]){         
        const result:string[] = []
        for(let i =0; i < a.length; i++){
             if(a[i] - b[i] === 0){
                 result.push("D")
             }else if(a[i] === 1 && b[i] === 3){
                result.push("A")
             }else if(a[i] === 2 && b[i] === 1){
                 result.push("A")
             }else if(a[i] === 3 && b[i] === 2){
                 result.push("A")
             }else{
                 result.push("B")
             }
        }
        return result
    }

    let a=[2, 3, 3, 1, 3];
    let b=[1, 1, 2, 2, 3];
    console.log(solution23(a, b))
}
