/* 
1.Convert textual Phone Number to 10 digit numerical number

statement:
Given a string S of size N containing lowercase English letters, representing a phone number(all phone numbers will be 10 digits) in words, the task is to convert the number into digits. Repeating digits can be shortened as follows: 
If any digit repeats two times then in words is written as  “double”.
If any digit repeats three times then in words is written as  “triple”.

Examples:

Input: “five eight quad two four triple eight”
Output: “5822224888”
Explanation: Here is one 5, one 8, four 2, one 4, and three 8.

Input: “five one zero two four eight zero double three two”
Output: “5102480332”

Input: “five one zero six triple eight nine six four”
Output: “5106888964”

Input: “five eight double two double two four eight five six”
Output: “5822224856”
*/

const phonewords = "nine six double three four nine triple five zero";

const words = phonewords.split(" ");
let phoneNumber = "";
let i = 0;
const wordToDigit = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};
while (i < words.length) {
  if (words[i] === "double") {
    phoneNumber += wordToDigit[words[i + 1]].repeat(2);
    i += 2;
  } else if (words[i] === "triple") {
    phoneNumber += wordToDigit[words[i + 1]].repeat(3);
    i += 2;
  } else {
    phoneNumber += wordToDigit[words[i]];
    i++;
  }
}
console.log(phoneNumber);
