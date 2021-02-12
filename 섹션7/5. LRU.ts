// (()=>{
//     function solution(size:number, arr:number[]){
//         const cache = Array.from({
//             length:size
//         },()=>0);
        
//         arr.forEach(item => {
//             if(cache.includes(item)){
//                 const index = cache.indexOf(item);
//                 for(let i = index; i >= 1; i--){
//                     cache[i] = cache[i - 1]
//                 }
//                 cache[0] = item
//             }else{
//                 cache.unshift(item);
//                 if(cache.length >=  size){
//                     cache.pop();
//                 }
//             }
//         })
//         return cache
//     }
    
//     let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
//     console.log(solution(5, arr));    
// })();

// (()=>{
//     function solution(size:number, arr:number[]){
//         const cache = Array.from({
//             length:size
//         },()=>0);
        
//         arr.forEach(item => {
//             let pos = cache.indexOf(item);
//             if(pos > -1){
//                 //hit
//                 for(let i = pos; i >=1; i--){
//                     cache[i] = cache[i-1]
//                 }
//             }else{
//                 //miss
//                 for(let i = size - 1; i >= 1 ; i--){
//                     cache[i] = cache[i - 1]
//                 }
//             }
//             cache[0] = item
            
//         })
//         return cache
//     }
    
//     let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
//     console.log(solution(5, arr));    
// })();



(()=>{
    function solution(size:number, arr:number[]){
        const cache = Array.from({
            length:size
        },()=>0);
        
        arr.forEach(item => {
            let pos = cache.indexOf(item);
            if(pos === -1){
                cache.unshift(item);
                if(cache.length > size){
                    cache.pop()
                }
            }else{
                cache.splice(pos, 1);
                cache.unshift(item)
            }
        })
        return cache
    }
    
    let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7,13,12,19,20];
    console.log(solution(5, arr));    
})();