function solution(s:string){
    let answer = true;
    const target = s.toLowerCase().replace(/[^a-z]/g,""); //^not g 글로벌영역 //소문자 남기고 다 제거
    if(target.split("").reverse().join('') !== target){
        return false
    }
    return answer
}


console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));