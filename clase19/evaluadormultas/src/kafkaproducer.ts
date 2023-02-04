import log4js from "./lib/log4js";
import {Kafka, Partitioners} from 'kafkajs'

let logger = log4js.getLogger('kafkaproducer')

const kafka = new Kafka({
    clientId: process.env.KAFKA_CLIENT_ID,
    brokers: ['127.0.0.1:9092'],
    connectionTimeout: 5000
})

export async function generarMulta(objPersist) {
    const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner })
    
    await producer.connect()
    await producer.send({
        topic: 'datos-multas-qatar',
        messages: [{ value: JSON.stringify(objPersist) }]
    })
    await producer.disconnect()
}
