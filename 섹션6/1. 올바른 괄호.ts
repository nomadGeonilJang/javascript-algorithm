function solution(s: string):boolean{
    const stack:string[] = [];
    for(const curr of s){
        if(curr === "("){
            stack.push(curr)
        }else{
            stack.pop()
        }
    }
    console.log(stack)
    return stack.length === 0
}

let a="(((())(()";
console.log(solution(a));