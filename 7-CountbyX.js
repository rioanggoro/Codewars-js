//https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

//x=kelipatannya n=jumlah element pada array
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    //i=1 lebih kecil sama dengan n
    z.push(x * i);
  }
  return z;
}

console.log(countBy(1, 10));
