function solution(today, terms, privacies) {
  var answer = [];
  const [currnetYear, currentMonth, currentDay] = today
    .split(".")
    .map((v) => +v);
  const current = new Date(currnetYear, currentMonth, currentDay);

  let info = {};
  terms.forEach((term) => {
    const [type, endMonth] = term.split(" ");
    info[type] = endMonth;
  });

  privacies.forEach((privacy, index) => {
    const [startAt, type] = privacy.split(" ");
    let [year, month, day] = startAt.split(".").map((v) => +v);
    day = day - 1;

    const date = new Date(year, month, day);
    const finish = new Date(date.setMonth(date.getMonth() + info[type] * 1));
    if (current > finish) {
      answer.push(index + 1);
    }
  });
  return answer;
}
