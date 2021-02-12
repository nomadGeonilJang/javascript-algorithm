(() => {
    // greedy 갯 수 가 중요합니다.
    function solution(meeting: number[][]) {

        const answer:number[][] = [];
        meeting.sort((a, b) => {
            if(a[1] === b[1]){
                return a[0] - b[0]
            }else{
                return a[1] - b[1]
            }
        })
        
        let endTime = 0;
        for(const position of meeting){
            if(position[0] >= endTime){
                answer.push(position)
                endTime = position[1]
            }
        }

        return answer
    }

    let arr = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
    let arr1 = [[3,3], [1, 3], [2, 3]];
    console.log(solution(arr));
    console.log(solution(arr1));
})();