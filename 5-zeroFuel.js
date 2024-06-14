//https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft; //jika jumlah ke pom bensin kurang dari jarak yang harus ditempuh, maka true
};

console.log(zeroFuel(50, 25, 2));
