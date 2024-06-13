//https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

function hero(bullets, dragons) {
  if (bullets / 2 >= dragons) {
    return true;
  } else {
    return false;
  }
}

console.log(hero(10, 5));

//Jika kondisi terpenuhi (jumlah peluru cukup untuk mengalahkan semua naga), mengembalikan true.
//Jika tidak, mengembalikan false.
