function findLargest(arr) {
  let largest = arr[0]; // Assume the first element is the largest
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([3, 7, 2, 9, 5]));