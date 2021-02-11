{
    function solution(s:string){
        let answer=0;
        const stack:string[] = [];
        for(let i = 0 ; i < s.length ; i++){
           if(s[i] === "(") stack.push(s[i])
           else{
                stack.pop()
               if(s[i - 1] === '('){ 
                    answer += stack.length
               }else{
                   answer +=1
               }
           }
        }
        console.log(answer)
    }
    
    let a="()(((()())(())()))(())()";
    console.log(solution(a));
}


