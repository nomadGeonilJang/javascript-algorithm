function solution2(...stick:number[]){
    
    let longest:number = 0;
    let shortherTotal:number = 0;
    for(let i = 0 ; i < stick.length ; i++){
        if(longest < stick[i] ){
            longest = stick[i]
        }
    }
    for(let j = 0 ; j < stick.length; j++){
        if(stick[j] !== longest){
            shortherTotal += stick[j]
        }
    }

    return shortherTotal >= longest
}

console.log(solution(13, 33, 17));