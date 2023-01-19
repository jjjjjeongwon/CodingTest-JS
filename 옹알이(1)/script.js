console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));

function solution(babbling) {
  var answer = 0;
  
  let pronounceWord = ['aya', 'ye', 'woo', 'ma'];
  let answerArr = [];
  
  for(let i = 0; i<babbling.length; i++){
      for(let j = 0; j<pronounceWord.length; j++){
          const reg = new RegExp(pronounceWord[j],'g');
          babbling[i]=babbling[i].replace(reg,' ');
          if(babbling[i].trim()===''){
              answerArr.push(babbling[i]);
              break;
          }
      }
  }
  
  answer = answerArr.length;
  
  return answer;
}