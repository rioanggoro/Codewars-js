//https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      // jika dna yang terindex ke i bernilai T
      rna += "U"; // maka akan ditambahkan u ke rna
    } else {
      //selain itu
      rna += dna[i]; // maka akan ditambahkan ke rna nilai U
    }
  }
  return rna;
}

console.log(DNAtoRNA(""), "UUUU");
