function findLargest(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// Example:
const numbers = [10, 25, 3, 99, 56, 78];
console.log(findLargest(numbers)); // 👉 99
