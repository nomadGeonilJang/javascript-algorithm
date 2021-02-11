function solution(s:string){  
   const stack:string[] = [];
   for(const item of s){
       if(item !== ")"){
           stack.push(item)
           continue;
       }
    //    while(true){
    //        if(stack.pop() === '('){
    //            break;
    //        };
    //    }
        while(stack.pop() !== "(");
   }
   console.log(stack)
   
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));