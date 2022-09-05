function fibs(n) {
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    let num = result[result.length - 1] + result[result.length - 2]
    result.push(num)
  }
  return result;
}