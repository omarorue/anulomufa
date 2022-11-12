
function fn(identificador) {
    arrOrginal = identificador
    arrModificado = arrOrginal.splice(1, 3, "hola")
    console.log('original: ', arrOrginal)
    console.log('modificado: ', arrModificado)
}

// Ejemplo rest operator
let suma = (...arr) => {
    let sum = 0
    for (z of arr) {
        sum += z
    }
    return sum
}

console.log(suma(4, 5, 6))

// Spread operator
let fn2 = (uno, dos) => {
    console.log('param1: ' + uno)
    console.log('param2: ' + dos)
}


let arr1 = [1, 2, 3, 4, 5]
let arr2 = [...arr1]

arr1.push('nuevo elemento')

console.log(arr1)
console.log(arr2)

fn2(...arr2)
