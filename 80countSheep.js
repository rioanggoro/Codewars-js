//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += i + " sheep...";
  }
  return result;
};

console.log(countSheep(3));
