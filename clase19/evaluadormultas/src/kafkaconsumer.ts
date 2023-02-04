import log4js from "./lib/log4js";
import {Kafka, Partitioners, TopicPartition} from 'kafkajs'
import {push} from './colamemoria'
import {evaluarSiCorrespondeMulta} from './logicaMultas'

let logger = log4js.getLogger('kafkaconsumer')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['127.0.0.1:9092'],
    connectionTimeout: 5000
})
  
let doTime = t => new Promise((r) => { setTimeout(r, t); })

async function consumer() {
    const consumer = kafka.consumer({ groupId: 'unico-group-id3' })
    await consumer.connect()
    await consumer.subscribe({ topic: 'data-transito', fromBeginning: true })
    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
            try {
                let objRecieved = JSON.parse(<string>message?.value?.toString())
                console.log({
                    value: message?.value?.toString(),
                    topic,
                    partition
                })
                evaluarSiCorrespondeMulta(objRecieved)
                let hb = heartbeat
                let resume = pause()
                console.log('Haciendo tiempo')
                console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
                await doTime(5000)                
                resume()
            }
            catch (err) {
                console.log(err)
            }
        }
    })
}

export let initConsumer = () => {
    try {
        consumer()
    }
    catch (err) {
        logger.error(err)
    }
}

