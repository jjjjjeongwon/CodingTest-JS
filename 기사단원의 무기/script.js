console.log(solution(5, 3, 2));

function solution(number, limit, power) {
  let measure = 0;
  let answer = 0;

  for (let i = 1; i < number + 1; i++) {
    let jLoop = Math.sqrt(i);
    for (let j = 1; j <= Math.floor(jLoop); j++) {
      if (i % j === 0) {
        measure += 2;
      }
    }
    if (Number.isInteger(jLoop)) {
      measure -= 1;
    }
    measure > limit ? (answer += power) : (answer += measure);
    measure = 0;
  }

  return answer;
}
