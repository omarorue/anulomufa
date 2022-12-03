let genUsuario = require('./lib/genusuario')
let asyncForLoop = require('./lib/asyncForLoop')
let fs = require('fs')
let dotenv = require('dotenv')

dotenv.config()

asyncForLoop(4999, (idx, fnNext) => {
    let usuario = genUsuario()
    let txtUsuario = JSON.stringify(usuario)
    let nombreArchivo = [process.env.PATH_TICKETS, usuario.id, '.json'].join('')
    console.log(nombreArchivo)
    fs.writeFile(nombreArchivo, txtUsuario, 'utf-8', (err) => {
        console.log(err)
        fnNext()
    })
}, (err) => {
    console.log(err)
})


/*
let unaFuncion = (mensaje, onFinish) => {
    console.log(mensaje)
    setTimeout(() => {
        onFinish(null)
    }, 1000)
}

unaFuncion('hola que tal', (err) => {
    unaFuncion('como va', (err) => {
        unaFuncion('que onda', (err) => {
            unaFuncion('y tu ?', (err) => {
                unaFuncion('good ????', (err) => {
                    console.log('YA TERMINO EL INFIERNO DE CALLBACKS')
                })
            })
        })
    })
})

*/