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
import {insert, query} from './lib/clienteMongo'

dotEnv.config()

;(async function() {
    let pathTickets = util.checkStrDef(process.env.PATH_TICKETS)
    let files:Array<String> = await fs.promises.readdir(util.checkStrDef(process.env.PATH_TICKETS))
    for (let x of files) {
        let pathCompleto:String = [pathTickets, x].join('')
        console.log(pathCompleto)
        let contenido = await fs.promises.readFile(<string>pathCompleto, 'utf-8')
        console.log(contenido)
        await insert('anulomufa', 'prueba1', JSON.parse(contenido))
    }
})


;(async function() {
    let result = await query('anulomufa', 'prueba1', {city:"Alecton"})
    for (let x of result) {
        console.log(JSON.stringify(x))
    }
})()

