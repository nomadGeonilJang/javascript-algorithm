function solution(s:string, t:string){
    const result:number[] = []
    let p = 1000;

    for(const x of s){
        if(x !== t){
            p++
        }else{
            p=0;
        }
        result.push(p)
    }

    p = 1000;
    for(let i = s.length - 1 ; i >=0 ; i--){
        if(s[i] !== t){
            p++
        }else{
            p=0;
        }
        
        if(p < result[i]){
            result[i] = p
        }
    }

    return result
    
}


console.log(solution("teachermode", 'e'));