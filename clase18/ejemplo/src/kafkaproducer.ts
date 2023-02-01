import log4js from "./lib/log4js";
import {Kafka, Partitioners} from 'kafkajs'

let logger = log4js.getLogger('kafkaproducer')

let resolver = (inp:string|undefined):string => {
    if (typeof inp === undefined) {
        console.log('GUARDA PORQUE NO SE PUDO LEER EL .ENV')
    }
    console.log(typeof inp)
    if (typeof inp === 'string') {
        return inp
    }
    throw new Error('ATENCION, NO SE PUEDE RESOLVER ...')
}

const kafka = new Kafka({
    clientId: process.env.KAFKA_CLIENT_ID,
    brokers: ['127.0.0.1:9092'],
    connectionTimeout: 5000
})

export async function producer(objPersist) {
    const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner })
    
    await producer.connect()
    await producer.send({
        topic: 'numeros',
        messages: [{ value: JSON.stringify(objPersist) }]
    })
    await producer.disconnect()
}