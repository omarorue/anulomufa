import log4js from "./lib/log4js";
import {registrarCallBack} from './colamemoria'
import {generarMulta} from './kafkaproducer'

let logger = log4js.getLogger('logicaMultas')

const LIMITES = {}

LIMITES['NORMAL_Auto'] = 130
LIMITES['NORMAL_Moto'] = 130
LIMITES['NORMAL_Camion'] = 100
LIMITES['NORMAL_Tractor'] = 90

LIMITES['LLUVIAS_MODERADAS_Auto'] = 130
LIMITES['LLUVIAS_MODERADAS_Moto'] = 130
LIMITES['LLUVIAS_MODERADAS_Camion'] = 100
LIMITES['LLUVIAS_MODERADAS_Tractor'] = 90

LIMITES['LLUVIAS_TORRENCIALES_Auto'] = 130
LIMITES['LLUVIAS_TORRENCIALES_Moto'] = 130
LIMITES['LLUVIAS_TORRENCIALES_Camion'] = 100
LIMITES['LLUVIAS_TORRENCIALES_Tractor'] = 90

export let initLogicaMultas = () => {
    registrarCallBack((item, onFinish) => {
        console.log('*****************************************************')
        console.log('ACA HAY QUE DECIDIR SI EL VEHICULO ESTA EN INFRACCION')
        console.log('*****************************************************')

        console.log(item.clima)
        console.log(item.datosVehiculo.tipoVehiculo)
        console.log(item.datosVehiculo.velocidadMedida)

        let key = [item.clima, item.datosVehiculo.tipoVehiculo].join('_')
        if (item.datosVehiculo.velocidadMedida <= LIMITES[key]) {
            console.log('NOOOOOOOO ESTA EN INFRACCION')
            setTimeout(onFinish, 0)
            return
        }
        console.log('ESTA EN INFRACCION')
        generarMulta(item)
        .then(() => { setTimeout(onFinish, 0) })
        .catch(err => logger.error(err))
    })
}