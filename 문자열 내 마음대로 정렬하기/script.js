console.log(solution(["sun", "bed", "car"], 1));

function solution(strings, n) {
    var answer = [];
    
    const list = new Map();
    
    for(let i = 0; i<strings.length; i++){
        list.set(strings[i],strings[i][n]);
    }
    
    let sortArray = [...list].sort((a, b) => {
        if(a[1]===b[1]){
            return a[0].localeCompare(b[0]);
        }
        return a[1].localeCompare(b[1]);
    });
    
    let sortArrayMap = new Map(sortArray);
    
    answer = Array.from(sortArrayMap.keys());
   
    return answer;
}