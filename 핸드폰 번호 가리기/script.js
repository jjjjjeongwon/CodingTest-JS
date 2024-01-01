function solution(phone_number) {
  let answer = "";

  let back = phone_number.substr(-4, 4);
  console.log(back);

  let front = phone_number.substring(0, phone_number.length - 4);
  console.log(front);

  let result = front.replace(/[0-9]/g, "*");
  console.log(result);

  answer = result + back;

  return answer;
}
