import log4js from "./lib/log4js";
import {initColaMemoria, registrarCallBack, push} from './colamemoria'
import {producer} from './kafkaproducer'

let logger = log4js.getLogger('sistemamultas')

var readline = require('readline');

const { spawn, exec } = require('child_process');


let ejemploExec = () => {
    exec('ls -allh', (error, stdout) => {
        if (error) {
            console.log(error)
            return
        }
        console.log(stdout)
    })

    exec('pwd', (error, stdout) => {
        if (error) {
            console.log(error)
            return
        }
        console.log(stdout)
    })
}

let ejemploSpawn = () => {
    // const child = spawn('java', ['-jar', '/cursos/QatarMessi/clase12/sensortransito/sensor.jar', 2000]);
    const child = spawn('ping', ['-t', '8.8.8.8']);

    child.stdout.on('data', (data) => {
        let tmp = Buffer.from(data)
        let lineaAnalizar = tmp.toString('utf8')
        
        let strt = lineaAnalizar.indexOf('tiempo=')
        if (strt === -1) {
            return
        }
        let fin = lineaAnalizar.indexOf('ms')
        if (fin === -1) {
            return
        }
        let tiempoICMP = lineaAnalizar.substring(strt, fin)
        console.log({tiempoICMP})
        producer({tiempoICMP})
    });

    child.on('exit', function (code, signal) {
        logger.info('child process exited with ' +
                    `code ${code} and signal ${signal}`);
    });
}

export let init = () => {
    
    ejemploSpawn()

    /*
    const child = spawn('java', ['-jar', '/cursos/QatarMessi/clase12/sensortransito/sensor.jar', 2000]);

    child.stdout.on('data', (data) => {
        let objClimaVehiculo = JSON.parse(data)
        push(objClimaVehiculo)
    });

    child.on('exit', function (code, signal) {
        logger.info('child process exited with ' +
                    `code ${code} and signal ${signal}`);
    });

    registrarCallBack((item, onFinish) => {
        logger.debug('esto es lo que saco del array')
        logger.info(item)
        producer(item)
        .then(onFinish)
    })
    
    initColaMemoria()
    */
}

