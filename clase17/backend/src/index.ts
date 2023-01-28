import express, {Express} from 'express'
import generarUsuario from './lib/genusuario'
import {insert, query, update, deleteById} from './lib/clienteMongo'
import crearObjetoFake from './lib/genusuario'
import {Router} from 'express'
import alumnoCrud from './routes/alumnoRoute'
import usuarioCrud from './routes/usuarioRoute'
import middlewareSeguridad from './middleware/middlewareSeguridad'
import { longPolling } from './routes/longPollingRoute'

let app:Express = express()

// app.use(express.json())
app.use(express.text());
app.use(express.static('public'))

app.use(alumnoCrud)
app.use(usuarioCrud)
app.use(longPolling)

app.use('/usuario', (err, request, response, next) => {
    console.log('Ingreso al middleware de manejo de erores **')
    console.log(err)
    next(err)
})


app.use('/', (err, request, response, next) => {
    console.log('Ingreso al middleware raiz manejo de erores ***')
    console.log(err)
    response.status(500).send('Error interno raiz')
})


app.listen(3000)



let fn = async () => {
    for (let i = 0; i < 10000; i++) {
        let alumno = crearObjetoFake();
        await insert('anulomufa', 'alumno', alumno)
    }
}

// fn()