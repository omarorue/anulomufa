let fs = require('fs')

/*
Repaso de lo asincronico

El sistema operativo, trabaja de manera asincronica, es decir.
Le pido leer un archivo y me retorna un handler, o manejador

Le voy a registrar un callback que es un puntero a funcion para que se invoque
cuando ha terminado la operacion de lectura.

ejemplo sobre archivo, ejemplo sobre setTimeout

*/

/*
fs.readFile('/cursos/cursonode/src/repaso-arrow.js', 'utf-8', (e, data) => {
    console.log(e)
    console.log(data)
})
*/

setTimeout(() => {
    console.log('han pasado 5 segundos')
}, 5000)
console.log('voy a esperar 5 segundos')

