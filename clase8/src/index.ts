/*

Pasos para leer los archivos de una carpeta, e insertarlos en mongodb

leer directorio - formato async o promise

Aca lo que hay que tener en cuenta es que me retorna un conjunto de archivos SIN path

Para poder leer cada uno de los archivos ? tengo que agregarle el path

read file, pasarlo a formato async o promise

luego, llamar a insert de clienteMongo

*/

/*
import {insert} from './lib/clienteMongo'

insert('anulomufa', 'prueba2', {saludo:'hoa a todos x tercera vez'})
.then(z => console.log(z))
.then(e => console.log(e))
*/


import fs from 'fs'
import * as util from './lib/util'
import dotEnv from 'dotenv'
import {asyncForLoop} from './lib/asyncForLoop'

dotEnv.config()

let leerDir = async () => {
    return 
}

(async function() {
    let files:Array<String> = await fs.promises.readdir(util.checkStrDef(process.env.PATH_TICKETS))
    for (let x of files) {
        console.log(x)
    }
})()

/*
fs.promises.readdir(util.checkStrDef(process.env.PATH_TICKETS))
.then((archivosDelFolder) => {
    let cantArchivos:number = archivosDelFolder.length

    asyncForLoop(cantArchivos, (idx, next, abort) => {
        let nomArchivo:string = archivosDelFolder[idx]
        let pathArchivo = [process.env.PATH_TICKETS, nomArchivo].join('')

        fs.promises.readFile(pathArchivo)
        .then(valor => { 
            console.log(valor.toString('utf-8')) 
            next()
        })
        .catch(e => {
            abort(e)
        })
    }, e => {
        console.log('termino con codigo de error: ' + e)
    })    
})
.catch(e => {
    if (e!) {
        return
    }
    console.log('sale x catch')
    console.log(e)
})

*/