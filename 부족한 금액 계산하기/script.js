function solution(price, money, count) {
  let answer = -1;

  let totalPrice = 0;

  for (let i = 1; i < count + 1; i++) {
    totalPrice += price * i;
  }

  answer = totalPrice - money;
  if (answer <= 0) {
    return 0;
  } else {
    return answer;
  }
}

console.log(solution(3, 20, 4));
