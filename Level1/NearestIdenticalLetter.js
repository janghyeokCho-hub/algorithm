function solution(s) {
  let result = new Array(s.length).fill(-1);
  let lastIndices = new Map();

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (lastIndices.has(currentChar)) {
      let lastIndex = lastIndices.get(currentChar);
      result[i] = Math.min(i - lastIndex - 1, result[lastIndex]);
    }
    lastIndices.set(currentChar, i);
  }

  return result;
}
