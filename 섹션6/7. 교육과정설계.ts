(()=>{
    function solution(need:string, plan:string){
        let answer = true
        const queue = need.split("");
        for(const subject of plan){
            if(queue.includes(subject)){
                if(subject !== queue.shift()){
                    answer = false;
                    break;
                }
            }
        }
        if(queue.length > 0){
            answer = false;
        }
        return answer;
    }

    let a="CBA";
    let b="CBDAGE";
    console.log(solution(a, b));
})()

