import {Collection, MongoClient} from 'mongodb'

const url = 'mongodb://localhost:27017'

export let insertCallBack = (base, coleccion, documento, callBackFn) => {
    let cliente:MongoClient
    
    MongoClient.connect(url)
    .then(client => {
        cliente = client
        let db = client.db(base)
        let collection = db.collection(coleccion)
        return collection
    })
    .then(coleccion => {
        return coleccion.insertOne(documento)
    })
    .then(metadata => {
        console.log(metadata)
        return metadata
    })    
    .then(result => {
        setTimeout(callBackFn.bind(null, null, result), 0)
        cliente.close()
    })
    .catch(e => {
        callBackFn(e)
        cliente.close()
    })
}

export let insert = async (base, coleccion, documento) => {
    try {
        let cliente:MongoClient = await MongoClient.connect(url)
        let db = cliente.db(base)
        let collection = db.collection(coleccion)
        let metadata = await collection.insertOne(documento)
        console.log(metadata)
        await cliente.close()
    }
    catch (err) {
        throw err
    }
}
