console.log(solution("12321", "123450"));

function solution(X, Y) {
    let answer = '';
    const xArr = [...X];
    const yArr = [...Y];
    for(let i = 9; i>=0; i--){
        const findNumber = ""+i;
        const countX = xArr.filter(num=> num === findNumber).length;
        const countY = yArr.filter(num=> num === findNumber).length;
        answer += findNumber.repeat(Math.min(countX,countY));
    }
    if(answer === "") return '-1';
    if(Number(answer) === 0) return '0';
    return answer;
}



//시간초과
// function solution(X, Y) {
//     var answer = '';
//     let correctArr = [];
//     let xArr = [...X];
    
//     for(let i =0; i<xArr.length; i++){
//         let checkMatch = Y.match(xArr[i]);
//         if(checkMatch){
//             correctArr.push(checkMatch[0]);
//             Y = Y.replace(checkMatch[0],'');
//             }
//         }
    
//     let result = correctArr.sort((a,b)=> b-a).join('');
    
//     if(!result) return answer = '-1';
//     if(Number(result)===0) return answer='0';
//      return answer = result;
    
// }