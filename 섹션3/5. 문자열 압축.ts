function solution(s:string){
   let cnt = 1;
   let result = "";
   let currentTarget:string = s[0];
    for(let i = 1; i < s.length ; i++){
        if(s[i] === currentTarget){
            cnt++;
        }else{
            result += `${currentTarget}${cnt > 1 ? cnt : ""}`
            currentTarget = s[i];
            cnt = 1;
        }
    }
    return result
}


console.log(solution("KKHSSSSSSSE "));