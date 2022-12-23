import express, {Express} from 'express'
import generarUsuario from './lib/genusuario'
import {insert, query, update, deleteById} from './lib/clienteMongo'
import crearObjetoFake from './lib/genusuario'
import {Router} from 'express'
import alumnoCrud from './routes/alumnoRoute'

let app:Express = express()
app.use(express.json())
app.use(express.static('public'))

app.use((request, response, next) => {
    console.log('Estoy en el middleware NUMERO I')
    setTimeout(() => {
        next()
    }, 2000)
})

app.use((request, response, next) => {
    console.log('Estoy en el middleware NUMERO II')
    next();
})

app.use(alumnoCrud)

app.listen(3000)



let fn = async () => {
    for (let i = 0; i < 10000; i++) {
        let alumno = crearObjetoFake();
        await insert('anulomufa', 'alumno', alumno)
    }
}

// fn()