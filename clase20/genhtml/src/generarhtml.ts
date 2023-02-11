import log4js from "./lib/log4js";
import {registrarCallBack} from './colamemoria'
import {generarMulta} from './kafkaproducer'
import fs, {promises}  from 'fs'
import {render} from 'mustache'

let logger = log4js.getLogger('logicaMultas')

/*
contar con un template html que 
tener a mano la libreria de Mustache la misma que utilizamos del lado del cliente
Tendriamos que tener alguna logica para cada vez que ingresa un cliente
guardarlo en un array y cuando se junten x clientes, generar un archivo html.
considerar que el nombre del html sea ...
*/

console.log('***********CREA LA VARIABLE arrCliente****************')
let arrCliente = Array<any>()
console.log('***************************')


let leerTemplate = async () => {
    let path = '/cursos/input/cliente_rango.html'
    let contenido = await fs.promises.readFile(path, 'utf-8')
    return contenido
}

let grabarPlanilla = async (nombre) => {
    console.log(nombre)
    let tmpl = await leerTemplate()
    let path = ['/cursos/output/', nombre, '.html'].join('')
    let output = render(tmpl, {clientes: arrCliente, titulo: 'ACA VA EL TITULO', rango_seleccion: 'Aca va el rango de seleccion'})
    await fs.promises.writeFile(path, output, 'utf-8')
}

export let generarhtml = async (seq, objCliente) => {
    arrCliente.push(objCliente)
    if (arrCliente.length < 20) {
        return
    }
    console.log('******************************************************')
    await grabarPlanilla('seq_'.concat(seq))
    arrCliente = []
}