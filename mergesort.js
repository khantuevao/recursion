function mergeSort(arr) {
  //if arr has 1 element, it is ready for merging
  if (arr.length === 1) return array;
  //get mid point of array
  let middle = Math.ceil(arr.length / 2)
  //sort left half
  let left = mergeSort(arr.splice(0, middle))
  //sort right half
  let right = mergeSort(arr.splice(-middle))
  //merge halves
  return merge(left, right)
}

function merge(left, right) {
  let newArr = []
  //merge elements from two arrays as long as they both contain at least 1 element
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      //add first left element to new arr
      newArr.push(left[0])
      //remove first element from left arr
      left.shift()
    } else {
      //add first right element to new arr
      newArr.push(right[0]) 
      //remove first element from right arr
      right.shift()
    }
  }
  //if left arr has elements left, add them to new arr in order
  while (left.length > 0) {
    newArr.push(left[0])
    left.shift()
  }
  //if right arr has elements left, add them to new arr in order
  while (right.length > 0) {
    newArr.push(right[0])
    right.shift()
  }
  //return result
  return newArr;
}