/**
 * find second largest number in an array
 */

const array = [1, 2, 4, 3, 5, 6, 43, 1, 2, 43, 7];

let largest = array[0];
let secondLargest = array[1];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element > largest) {
    secondLargest = largest;
    largest = element;
  } else if (element > secondLargest && element !== largest) {
    secondLargest = element;
  }
}

console.log(secondLargest);
