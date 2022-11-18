let genUsuario = require('./lib/genusuario')
let asyncForLoop = require('./lib/asyncForLoop')
let fs = require('fs')
let dotenv = require('dotenv')

dotenv.config()

let callBackRepetitivo = (idx, fnNext) => {
    let usuario = genUsuario()
    let txtUsuario = JSON.stringify(usuario)
    let nombreArchivo = [process.env.PATH_TICKETS, usuario.id, '.json'].join('')
    console.log(nombreArchivo)
    fs.writeFile(nombreArchivo, txtUsuario, 'utf-8', (err) => {
        console.log(err)
        console.log('termino de escribir el archivo')
        fnNext()
    })
}

let callBackParaFinalizar = (err) => {        
    console.log(err)
    console.log('termino de iterar')
}

asyncForLoop(10, callBackRepetitivo, callBackParaFinalizar)
