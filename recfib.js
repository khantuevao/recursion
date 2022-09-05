function fibsRec(n, arr = [0,1]) {
  if (n === arr.length) return arr

  const newNumber = arr.at(-1) + arr.at(-2)
  arr.push(newNumber)
  return fibsRec(n, arr)
}