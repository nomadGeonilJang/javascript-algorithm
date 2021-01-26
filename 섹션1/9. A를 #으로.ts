const solution9 = (s:string) =>  s.replace(/A/g, "#");
let str="BANANA";
console.log(solution9(str));

function change(s:string){
    let result = ""
    for(let x of s){
        if(x === "A"){
            result += "#"
        }else{
            result += x
        }
        
    }
    return result
}
console.log(change("BANANA"))