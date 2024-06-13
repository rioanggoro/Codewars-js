// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x) {
  let result = x[0]; // result diinisialisasi dengan nilai elemen pertama dari array x (yaitu x[0]).
  for (let i = 1; i < x.length; i++) {
    //Perulangan dimulai dari elemen kedua (indeks 1) hingga elemen terakhir dari array.
    result *= x[i]; //Setiap elemen dikalikan dengan result.
  }
  return result;
}

console.log(grow([1, 2, 3, 4])); //Jadi, output dari console.log(grow([1, 2, 3, 4])) adalah 24.
