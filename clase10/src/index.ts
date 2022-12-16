import express, {Express} from 'express'
import generarUsuario from './lib/genusuario'
import {insert, query} from './lib/clienteMongo'
import crearObjetoFake from './lib/genusuario'


let app:Express = express()
app.use(express.json())

app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/plain')

    let htmlRespuesta = '<h1>Header uno</h1>'

    response.status(200).send(htmlRespuesta)
})

app.get('/inventaralumno', (request, response) => {
    response.setHeader('Content-Type', 'application/json')
    response.status(200).send(generarUsuario())
})

// Cual es la idea.
// Vamos a crear un post /usuario y vamos a insertar un documento en mongo
// Anteriormente, levantamos el documento de un archivo, y luego lo insertabamos
// Ahora va a venir por post, en el body

app.get('/alumno', (request, response) => {
    response.setHeader('Content-Type', 'application/json')

    console.log(request.query)
    let objQuery:any = {}
    if (request.query.lastName) {
        objQuery.lastName = request.query.lastName;
    }
    else {
        objQuery.lastName = 'Turner'
    }

    // AGREGARLE city MISMA LOGICA

    query('anulomufa', 'alumno', objQuery)
    .then(data => response.status(200).send(data))
    .catch(err => response.status(500).end())
})

app.get('/alumno/:id', (request, response) => {
    response.setHeader('Content-Type', 'application/json')
    
    query('anulomufa', 'alumno', {id:request.params.id})
    .then(data => { 
        if (data.length === 0) {
            response.status(404).end()
            return
        }
        response.status(200).send(data[0])
    })
    .catch(err => response.status(500).end())
})

app.get('/alumno/:id/:algomas', (request, response) => {
    response.setHeader('Content-Type', 'application/json')
    response.status(200).send({ahora:request.params.algomas})
})

app.post('/alumno', (request, response) => {
    console.log(typeof request.body)
    let contenido = request.body
    insert('anulomufa', 'alumno', contenido)
    .then(() => { response.status(201).end() })
    .catch(() => { response.status(500).end() })    
})

app.put('/alumno/:id', (request, response) => {
    response.setHeader('Content-Type', 'application/json')
    
    // Tiene que buscar si existe ese id.
    // si NO existe ? 404 NotFound
    // Si existe, reemplaza al existente con el objeto enviado

    query('anulomufa', 'alumno', {id:request.params.id})
    .then(data => { 
        if (data.length === 0) {
            response.status(404).end()
            return
        }
        // Modificar el existente con un update
        // no esta hecho en el clientemongodb
        response.status(200).end()
    })
    .catch(err => response.status(500).end())

    response.status(200).send()
})

app.delete('/alumno/:id', (request, response) => {
    response.setHeader('Content-Type', 'application/json')

    // No esta hecho el el clientemongodb
    response.status(200).send({ok:'ok'})
})

app.listen(3000)



let fn = async () => {
    for (let i = 0; i < 10000; i++) {
        let alumno = crearObjetoFake();
        await insert('anulomufa', 'alumno', alumno)
    }
}

// fn()