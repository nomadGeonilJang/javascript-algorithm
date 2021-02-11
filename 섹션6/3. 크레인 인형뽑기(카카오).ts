{

    const taskOut = (
        board:any,
        row, col
    ) => {
        const doll =  board[row][col]
        board[row][col] = 0
        return doll
    }

    const getLastItem = (stack) => {
        return stack[stack.length - 1];
    }

    function solution(board:any[][], moves:any[]){
    let answer=0;
    let stack:number[]=[];

    moves.forEach(pos => {
        for(let row = 0; row < board.length ; row++){
            
            if(board[row][pos - 1] !== 0){
                const doll = taskOut(board, row, pos-1)
                if(getLastItem(stack) === doll){
                    stack.pop();
                }else{
                    stack.push(doll);
                }
                break;
            }
        }
        
    })
    console.log(stack)
    return answer;
}

let a=[[0,0,0,0,0],
       [0,0,1,0,3],
       [0,2,5,0,1],
       [4,2,4,4,2],
       [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
}