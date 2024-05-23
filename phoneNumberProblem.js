const wordToDigit = (word) => {
  switch (word) {
    case "one":
      return "1";
    case "two":
      return "2";
    case "three":
      return "3";
    case "four":
      return "4";
    case "five":
      return "5";
    case "six":
      return "6";
    case "seven":
      return "7";
    case "eight":
      return "8";
    case "nine":
      return "9";
    case "zero":
      return "0";
    default:
      return "";
  }
};

const convertPhoneNumber = (phoneWords) => {
  const words = phoneWords.split(" ");
  let phoneNumber = "";
  for (let index = 0; index < words.length; index++) {
    let word = words[index];
    if (word === "double") {
      const digit = wordToDigit(words[index + 1]);
      phoneNumber += digit + digit;
      index++;
    } else if (word === "triple") {
      const digit = wordToDigit(words[index + 1]);
      phoneNumber += digit + digit + digit;
      index++;
    } else {
      phoneNumber += wordToDigit(word);
    }
  }
  return phoneNumber;
};

const phoneWords = "double six two six seven triple six three five three";
const phoneNumber = convertPhoneNumber(phoneWords);
console.log(phoneNumber);
