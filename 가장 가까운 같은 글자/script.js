// 테케 통과
// function solution(s) {
//     let answer = [];
//     let stackArr =[];
//     let sArr = s.split('');

//     for(let i =0; i<s.length; i++){
//         if(stackArr.includes(sArr[i])){
//             answer.push(stackArr.length-stackArr.indexOf(sArr[i]));
//             stackArr.splice(stackArr.indexOf(sArr[i]),1);
//             stackArr.push(sArr[i]);
//         }else{
//             answer.push(-1);
//             stackArr.push(sArr[i]);
//         }
//     }
//     return answer;
// }

function solution(s) {
  const answer = Array.from({ length: s.length }, () => -1);

  let sArr = s.split('');

  for (let i = sArr.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (sArr[i] === sArr[j]) {
        answer[i] = i - j;
        break;
      } else {
      }
    }
  }

  return answer;
}
