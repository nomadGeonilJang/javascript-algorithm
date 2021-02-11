const reverse = (item:number) => Number(String(item).split("").reverse().join(""));
const isPrime = (num:number) => {
    var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

function solution(arr:number[]){
  const answer:number[] = [];
  for(const x of arr){
      const reversed = reverse(x)
      console.log(reversed)
      if(isPrime(reversed)){
          answer.push(reversed)
      }
  }
  return answer
}


console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));