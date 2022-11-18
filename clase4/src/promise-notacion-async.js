let genUsuario = require('./lib/genusuario')
let asyncForLoop = require('./lib/asyncForLoop')
let fs = require('fs')
let dotenv = require('dotenv')

dotenv.config()

// return new Promise() retorna una promise
// en el constructor de la promise le pasamos una funcion a
// la funcion a tiene dos parametros que son dos funciones
// los parametros de a son: resolve, reject
// si todo va bien, llamo a Resove, de lo contrario llamo a Reject

let callBackRepetitivo = () => {
    return new Promise((resolve, reject) => {
        let usuario = genUsuario()
        let txtUsuario = JSON.stringify(usuario)
        let nombreArchivo = [process.env.PATH_TICKETS, usuario.id, '.json'].join('')
        console.log(nombreArchivo)
        fs.writeFile(nombreArchivo, txtUsuario, 'utf-8', (err) => {
            if (err) { // if (null) false | if (undefined) false | if (0) es false | if ("") es false (lo ultimo googlear)
                reject(err)
                return
            }
            resolve()
        })
    })    
}

let generar10Archivos = async () => {
    for (let z=0; z < 10; z++) {
        await callBackRepetitivo()
    }
}

generar10Archivos()

