{
    function solution(s){  
        let stack:number[]=[];
        for(const item of s){
            const target = Number(item)
            if(!isNaN(target)){
                stack.push(target)
            }else{
                const rt = stack.pop();
                const lt = stack.pop();
                switch(item){
                    case '+':
                        stack.push(lt! + rt!)
                        break;
                    case '-':
                        stack.push(lt! - rt!)
                        break;
                    case '*':
                        stack.push(lt! * rt!)
                        break;
                    case '/':
                        stack.push(lt! / rt!)
                        break;
                }
            }
        }
        return stack[0]
    }
    
    let str="35-";
    console.log(solution(str));
}