console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));

function solution(k, m, score) {
  let answer = 0;
  let scoreArr = score.sort((a, b) => b - a);

  for (let i = 0; i < scoreArr.length; i += m) {
    if (scoreArr[i + (m - 1)]) {
      answer += scoreArr[i + (m - 1)] * m;
    }
  }

  return answer;
}
