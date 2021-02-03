const numbers = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const tens = [
  'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

module.exports = function toReadable (number) {
  
  const num = String(number);

  if (number < 20) {
    return numbers[number];
  } else if (num.length == 2 && num[1] == 0) {
    number = `${tens[+num[0]-1]}`;
    return number;
  } else if (num.length == 2 && number > 19) {
    number = `${tens[+num[0]-1]} ${numbers[num[1]]}`;
    return number;
  } else if (num.length == 3 && num[1] == 0 && num[2] == 0) {
    return `${numbers[num[0]]} hundred`;
  } else if (num[1] == 0 || num[1] == 1) {
    number = `${numbers[num[0]]} hundred ${numbers[+num.slice(1,3)]}`;
    return number;
  } else if (num[2] == 0) {
    number = `${numbers[num[0]]} hundred ${tens[+num[1] - 1]}`;
    return number;
  } else {
    number = `${numbers[num[0]]} hundred ${tens[+num[1] - 1]} ${numbers[+num[2]]}`;
    return number;
  }
}
