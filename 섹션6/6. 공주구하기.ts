// {
//     function solution(n, k){
//       let rotate:number[] = [];
//       for(let i = 1 ; i <= n ; i++){
//           rotate.push(i)
//       }

//       let currentIndex = 0;
//       while(rotate.length > 1){
//        let currentRotation = k;
//        while(currentRotation > 0){
//         currentRotation--;
//         if(currentIndex === rotate.length){
//             currentIndex = 0;
//         }
//         if(currentRotation === 0){
//             rotate.splice(currentIndex, 1);
//             break;
//         }
//         currentIndex++;
//        }
//       }
//       return rotate[0]
//     }
//     console.log(solution(8, 3));
// }


