{function solution(s:string){         
    let cnt = 0;
    // for(const x of s){
    //     if(x.match(/^[A-Z]/g)){
    //         cnt++;
    //     }
    // }
    // for(const x of s){
    //     if(x === x.toUpperCase()){
    //         cnt++;
    //     }
    // }
    for(const x of s){
        const num = x.charCodeAt(0);
        if(num >= 65 && num <= 90){
            cnt++;
        }
    }
    return cnt
}

let str="KoreaTimeGood";
console.log(solution(str));}