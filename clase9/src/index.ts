import express, {Express} from 'express'
import generarUsuario from './lib/genusuario'
import {insert} from './lib/clienteMongo'

let app:Express = express()
app.use(express.json())

app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/plain')

    let htmlRespuesta = '<h1>Header uno</h1>'

    response.status(200).send(htmlRespuesta)
})

app.get('/inventarusuario', (request, response) => {
    response.setHeader('Content-Type', 'application/json')
    response.status(200).send(generarUsuario())
})

// Cual es la idea.
// Vamos a crear un post /usuario y vamos a insertar un documento en mongo
// Anteriormente, levantamos el documento de un archivo, y luego lo insertabamos
// Ahora va a venir por post, en el body

app.post('/usuario', (request, response) => {
    console.log(typeof request.body)
    let contenido = request.body
    insert('anulomufa', 'prueba2', contenido)
    .then(() => { response.status(201).end() })
    .catch(() => { response.status(500).end() })    
})

app.get('/hola', (request, response) => {
    response.setHeader('Content-Type', 'text/html')
    let htmlRespuesta = '<h1>Aca ingresa al metodo /hola</h1>'

    response.status(200).send(htmlRespuesta)
})

app.delete('/hola', (request, response) => {
    response.setHeader('Content-Type', 'text/html')
    let htmlRespuesta = 'Entro al delete'

    response.status(200).send(htmlRespuesta)
})


/**
 * Ejercicio. Implementar delete y responder un texto solo funcione con delete
 */

app.listen(3000)
