function solution(absolutes, signs) {
  let totalSum = 0;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      totalSum += absolutes[i];
    } else if (!signs[i]) {
      totalSum -= absolutes[i];
    }
  }

  return totalSum;
}
