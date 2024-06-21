function solution(ingredient) {
  let answer = 0;
  ingredient = ingredient.join("");

  while (ingredient.includes("1231")) {
    ingredient = ingredient.replaceAll("1231", "0");

    for (let i = 0; i < ingredient.length; i++) {
      if (ingredient[i] === "0") answer += 1;
    }

    ingredient = ingredient.replaceAll("0", "");
  }

  return answer;
}
