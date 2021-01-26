{
    function solution10(s:string, t:string){
        let cnt = 0;
        let flag = true
        while(flag){  
            if(s.indexOf(t) > -1){
                cnt +=1;
                s = s.replace(t,"")
            }else{
                flag = false
            }
        }
        return cnt
    }

    let str="COMPUTERPROGRAMMING";
    console.log(solution10(str, 'R'));
}