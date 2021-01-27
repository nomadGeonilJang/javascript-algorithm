function subItem(number:number){
    const strNumber = String(number);
    const currentItemSum = Number(strNumber.split("").reduce((a:string, c:string) => {
        return String(Number(a) + Number(c))
    }))
    return currentItemSum
}

function solution(n:number, arr:number[]){
   let answer = 0;
   const sameList:number[] = [];
   
   arr.forEach((number)=>{
        const sumed = subItem(number)
        if(answer < sumed){
            answer = sumed
        }
   })

   arr.forEach((number)=>{
    const sumed = subItem(number)
        if(sumed === answer){
            sameList.push(number)
        }
    })

    sameList.forEach(item => {
        if(answer < item){
            answer = item
        }
    })

    return answer
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));