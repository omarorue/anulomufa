import express from "express"
import {v4 as uuid} from 'uuid'
import { EventEmitter } from 'node:events'

export let longPolling = express.Router()

let hora = () => Math.floor(new Date().getTime() / 1000);
let objSuscribers = {}
let emitter = new EventEmitter()

;(function procesoInfinito() {
    let horaActual = hora()
    console.log('.')
    for (let suscriber in objSuscribers) {
        console.log(objSuscribers[suscriber].id)
        console.log(objSuscribers[suscriber].exp)
        console.log(horaActual)
        console.log()

        if (horaActual > objSuscribers[suscriber].exp) {
            let response = objSuscribers[suscriber].res
            delete objSuscribers[suscriber]

            response.status(200).send({status:'TIME_OUT'})
            // Tengo que hacer dos cosas
            // Borrar del mapa
            // Notificar a quien ? Como hago si del metodo suscribe ya sali
        }
    }

    setTimeout(procesoInfinito, 1250)
})()

longPolling.route('/api/publish/:id').post((request, response) => {
    let idMensaje = uuid()
    let idDestino = request.params.id
    let mensaje = request.body

    console.log(idDestino)
    console.log(mensaje)

    let found = objSuscribers[idDestino]

    delete objSuscribers[idDestino]

    if (!found) {
        response.status(404).send({message:`El mensaje para ${idDestino}, no se puede entregar en este momento `})
        return
    }

    console.log(found)

    response.status(200).send({message:`El mensaje para ${idDestino}, ha sido creado `})

    found.res.status(200).send({status: 'NEW_MESSAGE', data: mensaje})

    /*
    emitter.emit('NEW_MESSAGE', {
        dst: idDestino,
        msg: request.body,
        res: found.res
    })
    */
})

longPolling.route('/api/suscribe/:id').get((request, response) => {
    let idSuscriber = request.params.id

    objSuscribers[idSuscriber] = {
        id : idSuscriber,
        iat: hora(),
        exp: hora() + 10,
        res: response
    }

    /*
    Que sucede aca cuando me suscribo
    Esperar un determindo tiempo, y luego SI no tiene ninguna notificacion ? entonces
    se cae la conexion, y el cliente, tiene que volver suscribirse.
    Si le cae un mensaje, tiene que retornarlo, y el cliente vuelve a suscribirse
    */

    /*
    Tengo un mapa de participantes
    mapaParticipantes['id'] = {
        id : id,
        exp : expresado en segundos
    }
    */
})


emitter.addListener('NEW_MESSAGE', objParam => {

})

emitter.addListener('TIME_OUT', objParam => {

})