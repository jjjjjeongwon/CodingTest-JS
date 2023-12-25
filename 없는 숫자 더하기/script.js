function solution(numbers) {
  let answer = -1;
  let totalCount = 45;
  let sumNumbers = numbers.reduce((a, b) => a + b);
  answer = totalCount - sumNumbers;
  return answer;
}
