console.log(solution('abracadabra'));

function solution(s) {
  let sArr = s.split('');
  let totalCount = 0;
  let sameCount = 1;
  let otherCount = 0;
  let firstWord = sArr[0];

  for (let i = 1; i < s.length; i++) {
    if (sameCount === otherCount) {
      totalCount += 1;
      firstWord = sArr[i];
      sameCount = 1;
      otherCount = 0;
    } else if (firstWord === sArr[i]) {
      sameCount += 1;
    } else {
      otherCount += 1;
    }
  }

  return totalCount + 1;
}
