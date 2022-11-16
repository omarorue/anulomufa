let genUsuario = require('./lib/genusuario')
let asyncForLoop = require('./lib/asyncForLoop')
let fs = require('fs')

// Funciones asincronicas. Escribir archivo
/*
let usuario = genUsuario()
let txtUsuario = JSON.stringify(usuario)
let nombreArchivo = ['/var/anulomufa/tickets/', usuario.id, '.json'].join('')
console.log(nombreArchivo)
fs.writeFile(nombreArchivo, txtUsuario, 'utf-8', (err) => {
    console.log(err)
})
*/

asyncForLoop(1000, (idx, fnNext) => {
    console.log(idx)
    fnNext()
}, (err) => {
    console.log(err)
})

