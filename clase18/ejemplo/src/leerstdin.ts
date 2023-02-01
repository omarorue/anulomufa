import log4js from "./lib/log4js";
import {initColaMemoria, registrarCallBack, push} from './colamemoria'
import {producer} from './kafkaproducer'

let logger = log4js.getLogger('ejemplo')

let esperar = async () => {
    return new Promise((r) => {
        setTimeout(r, 2000);
    })
}

let fn = async (numero) => {
    await producer({segundaSerie: numero})
    await esperar()
    fn(numero+1)
}

export let init = () => {
    fn(1000)
}
