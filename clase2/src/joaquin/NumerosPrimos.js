let numerosPrimos = [2];
let n = 2;
let esPrimo = true;

let esDivisible = (z, i) => z % i === 0
let esDivisiblePorAlgunElementoDelArray = (elememto, arr) => {
    for (itemArr of arr) {
        if (esDivisible(elememto, itemArr)) {
            return false
        }    
    }
    return true
}

let obtenerNumerosPrimos = (max) => {
  let arr = [2]
  for (let i = 3; i <= max; i++) {
    if (esDivisiblePorAlgunElementoDelArray(i, arr)) {
      arr.push(i)
    }
  }
  return arr
}

let arrPrime = obtenerNumerosPrimos(7)
console.log(arrPrime)
