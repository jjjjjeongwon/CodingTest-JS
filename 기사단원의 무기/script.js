console.log(solution(5, 3, 2));

function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let measure = 0;
    let jLoop = Math.sqrt(i);
    for (let j = 1; j <= jLoop; j++) {
      if (i % j === 0) {
        measure += 2;
      }
    }
    if (Number.isInteger(jLoop)) {
      measure -= 1;
    }
    measure > limit ? (answer += power) : (answer += measure);
  }
  return answer;
}
