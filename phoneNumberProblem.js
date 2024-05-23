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
