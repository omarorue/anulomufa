import express, {Express} from 'express'

let app:Express = express()

app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/plain')

    let htmlRespuesta = '<h1>Header uno</h1>'

    response.status(200).send(htmlRespuesta)
})

app.get('/hola', (request, response) => {
    response.setHeader('Content-Type', 'text/html')
    let htmlRespuesta = '<h1>Aca ingresa al metodo /hola</h1>'

    response.status(200).send(htmlRespuesta)
})

app.listen(3000)
