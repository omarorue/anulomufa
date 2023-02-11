import log4js from "./lib/log4js";

let logger = log4js.getLogger('colamemoria')

let arrInterno:Array<any> = []
let callBack:Function = () => {}

export let push = (item) => {
    console.log('ESTOY PUSHEANDO')
    console.log(item[0])
    arrInterno.push(item[0])
}

let fnRecursiva = () => {
    if (arrInterno.length === 0) {
        logger.info('no hay mensajes encolados en memoria ...')
        setTimeout(fnRecursiva, 1000)
        return
    }
    logger.info('cantidad de mensajes encolados: ', arrInterno.length)
    let item = arrInterno.splice(0, 1)
    callBack(item[0], () => {
        setTimeout(fnRecursiva, 0)
    })
}

export let initColaMemoria = () => {
    fnRecursiva()
}

export let registrarCallBack = fn => {
    callBack = fn
}