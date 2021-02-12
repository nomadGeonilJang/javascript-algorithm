(()=>{
    function solution(times:number[][]){
        let answer = Number.MIN_SAFE_INTEGER;
        const timeLine:any = [];

        for(const time of times){
            timeLine.push([time[0],'s'])
            timeLine.push([time[1],'e'])
        }

        timeLine.sort((a,b)=>{
            if(a[0] === b[0]){
                return a[1].charCodeAt() - b[1].charCodeAt()
            }else{
                return a[0] - b[0]
            }
        })

        let cnt = 0 ;
        for(const x of timeLine){
            if(x[1] === 's') cnt++;
            else cnt--;
            answer = Math.max(answer, cnt)
        }

        return answer
    }

    let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
    console.log(solution(arr));
})();