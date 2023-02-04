import log4js from "./lib/log4js";
import {initColaMemoria, registrarCallBack, push} from './colamemoria'
import {producer} from './kafkaproducer'

let logger = log4js.getLogger('sistemamultas')

var readline = require('readline');

const { spawn, exec } = require('child_process');

export let init = () => {    
    const child = spawn('java', ['-jar', '/cursos/anulomufa/clase19/sensor.jar']);

    child.stdout.on('data', (data) => {
        let dataJson = Buffer.from(data)
        let climaVehiculo = JSON.parse(dataJson.toString('utf8'))
        console.log(climaVehiculo)
        producer(climaVehiculo)
    });

    child.on('exit', function (code, signal) {
        logger.info('child process exited with ' +
                    `code ${code} and signal ${signal}`);
    });
}

