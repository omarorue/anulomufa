let n = 174;

let par = z => z % 2 === 0
let impar = z => par(z) === false
let cortarMitad = z => z / 2
let applyCollatz = n => 3 * n + 1

let probarConjeturaCollatz = (n) => {
    for (;;) {
        n = (par(n)) ? cortarMitad(n) : applyCollatz(n)
        console.log(n);
    }
}

