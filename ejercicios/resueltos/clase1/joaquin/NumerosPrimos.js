let numerosPrimos = [2];
let n = 2;
let esPrimo = true;

for (let i = 0; i < 500; i++) {
  n += 1;
  numerosPrimos.forEach((np) => {
    if (n % np === 0) esPrimo = false;
  });

  if (esPrimo) {
    numerosPrimos.push(n);
  }

  esPrimo = true;        
}
console.log(numerosPrimos);
