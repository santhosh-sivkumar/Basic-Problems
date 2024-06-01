// For each element of an array, a counter is set to
// 0. The element is compared to each element to its
// left. If the element to the left is greater, the
// absolute difference is subtracted from the
// counter. If the element to the left is less, the
// absolute difference is added to the counter. For
// each element of the array, determine the value of
// the counter. These values should be stored in an
// array and returned.

// Example
// n = 3, the number of elements
// arr = [2, 4, 3]
// For arr[0]=2, counter starts at 0 and there are no
// elements to the left so counter = 0.
// For arr[1] 4, counter starts at 0 and then
// increases by /4-2/-2 at the first and only
// comparison: counter = 2.
// • Testing arr[2] = 3, first against 4, counter = 0-13-
// 4/=-1, and then against 2. counter =-1+ |3-21 =
// 0.
// • The answer array is [0, 2, 0].

function calculateCounter(array) {
  let ans = [];
  for (let i = 0; i < array.length; i++) {
    let counter = 0;
    for (let j = 0; j < i; j++) {
      let difference = Math.abs(array[i] - array[j]);

      if (array[j] > array[i]) {
        counter -= difference;
      }
      if (array[j] < array[i]) {
        counter += difference;
      }
    }
    ans.push(counter);
  }
  return ans;
}

console.log(calculateCounter([2, 1, 3]));
