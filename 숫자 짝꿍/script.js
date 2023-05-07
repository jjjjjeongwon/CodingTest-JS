// 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다
// (단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

// 예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다.
// 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다
// (X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
// 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.

console.log(solution('123321', '1233450'));

function solution(X, Y) {
  let answer = '';
  const xArr = [...X];
  const yArr = [...Y];
  for (let i = 9; i >= 0; i--) {
    const findNumber = '' + i;
    const countX = xArr.filter((num) => num === findNumber).length;
    const countY = yArr.filter((num) => num === findNumber).length;
    answer += findNumber.repeat(Math.min(countX, countY));
  }
  if (answer === '') return '-1';
  if (Number(answer) === 0) return '0';
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
