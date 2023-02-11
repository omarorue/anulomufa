import * as dotenv from 'dotenv'
import crearCliente from './lib/genusuario'
import {Kafka, Partitioners} from 'kafkajs'

dotenv.config()

const kafka = new Kafka({
    clientId: process.env.KAFKA_CLIENT_ID,
    brokers: ['127.0.0.1:9092'],
    connectionTimeout: 5000
})

async function producer(objPersist) {
    const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner })
    
    await producer.connect()
    await producer.send({
        topic: 'data-customer',
        messages: [{ value: JSON.stringify(objPersist) }]
    })
    await producer.disconnect()
}

(async function() {
    for (let x = 0; x < 5000; x++) {
        await producer(crearCliente())
        console.log(x)
    }
})();
