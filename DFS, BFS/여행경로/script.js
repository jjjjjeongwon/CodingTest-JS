function solution(tickets) {
  const answer = [];
  const goal = tickets.length + 1;
  const usedTicket = Array.from({ length: tickets.length }, (_) => 0);

  const dfs = (path) => {
    if (path.length === goal) {
      answer.push(path);
    } else {
      for (const i in tickets) {
        if (usedTicket[i] === 0) {
          const [start, end] = tickets[i];
          if (path[path.length - 1] === start) {
            usedTicket[i] = 1;
            dfs([...path, end]);
            usedTicket[i] = 0;
          }
        }
      }
    }
  };

  dfs(['ICN']);

  return answer.sort()[0];
}
