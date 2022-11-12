const readline = require('readline')

let cuenta = 1

let interfazCaptura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

interfazCaptura.question(' Ingrese un numero: ', function(respuesta){
  interfazCaptura.close()
  respuesta < 1 ? console.log ('Debe ingresar un numero positivo ! !') : contar(respuesta)
})

function collatz(numero){
  numero%2 === 0  ? numero = numero/2 : numero = numero*3 + 1
  return numero
} 

function contar(respuesta){
    let nuevoNum = collatz(respuesta)
    console.log(' Iteracion Nro: ' + cuenta + '  *   Collatz Nro: ' + nuevoNum)
    console.log('-----------------------------------------')
    do{
    cuenta ++
    nuevoNum = collatz(nuevoNum)
    console.log(' Iteracion Nro: ' + cuenta + '  *   Collatz Nro: ' + nuevoNum)
    console.log('-----------------------------------------')
    }while (nuevoNum !=1 )
}

