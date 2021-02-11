(()=>{
function solution(need:string, plan:string){
    const no:number[] =[];
    let answer = true;
    
    need.split("").forEach((subject)=>{
        no.push(plan.indexOf(subject));
    });

    for(let i = 1 ; i < no.length ; i++){
        if(no[i-1] > no[i] ){
            answer = false;
            break;
        }
    }

    for(let i = 0 ; i < no.length; i++){
        if(typeof no[i] !== "number"){
            answer = false;
            break;
        }
    }
    

    return answer;
}

let a="CBA";
let b="CBDGE";
console.log(solution(a, b));
})()

// (()=>{
//     function solution(need:string, plan:string){
//         let answer = true
//         const queue = need.split("");
//         for(const subject of plan){
//             if(queue.includes(subject)){
//                 if(subject !== queue.shift()){
//                     answer = false;
//                     break;
//                 }
//             }
//         }
//         if(queue.length > 0){
//             answer = false;
//         }
//         return answer;
//     }

//     let a="CBA";
//     let b="CBDAGE";
//     console.log(solution(a, b));
// })()

