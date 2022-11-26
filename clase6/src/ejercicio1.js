/*
tengo una funcion que suma 2 valores, simple

*/

let suma = (x, y, onFinish) => {
    setTimeout(() => {
        onFinish(x + y)
    }, 3000)
}

let sumaPromise = (x, y) => {
    return new Promise((resolve, reject) => {
        suma(x, y, (total) => {
            resolve(total)
        })
    })
}

// Hacer las tres implementaciones
suma(5, 25, (total) => {
    console.log(total);
 });
 
 // Usando promise con la notacion then-cach
 sumaPromise(19, 19)
 .then(total => {
    console.log(total)
 }).catch(() => { console.log("Hubo un error") });
 // Usando promise con la notacion async await
 
let sumaPromise2 = async (x, y) => {
    return await sumaPromise(x, y)
}

console.log(sumaPromise2)

