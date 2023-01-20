import {Collection, MongoClient} from 'mongodb'

const url = 'mongodb://0.0.0.0:27017'

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

export let update = async (base, coleccion, id:string, documento) => {
    try {
        let cliente:MongoClient = await MongoClient.connect(url)
        let db = cliente.db(base)
        let collection = db.collection(coleccion)
        let metadata = await collection.updateOne({id}, {$set: documento})
        console.log(documento)
        console.log(metadata)
        await cliente.close()
    }
    catch (err) {
        console.log(err)
        throw err
    }
}

export let deleteById = async (base, coleccion, id:string) => {
    try {
        let cliente:MongoClient = await MongoClient.connect(url)
        let db = cliente.db(base)
        let collection = db.collection(coleccion)
        let metadata = await collection.deleteOne({id})
        console.log(metadata)
        await cliente.close()
    }
    catch (err) {
        throw err
    }
}

export let query = async (base, coleccion, query) => {
    try {
        let cliente:MongoClient = await MongoClient.connect(url)
        let db = cliente.db(base)
        let collection = db.collection(coleccion)
        let resultado = await collection.find(query, {projection: {_id:0}}).toArray()
        await cliente.close()
        return resultado
    }
    catch (err) {
        throw err
    }
}

