/*
tengo una funcion que suma 2 valores, simple

*/

let suma = (x, y, onFinish) => {
    setTimeout(() => {
        onFinish(x + y)
    }, 3000)
}

let sumaPromise = (x, y) => {
    return new Promise(() => {
        suma(x, y, (total) => {
            resolve(total)
        })
    })
}

// Hacer las tres implementaciones 

// Usando promise con la notacion then-cach

// Usando promise con la notacion async await
