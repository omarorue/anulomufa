import { Router, Express } from 'express'
import generarUsuario from '../lib/genusuario'
import {insert, query, update, deleteById} from '../lib/clienteMongo'

let crudUsuario = Router();

crudUsuario.route('/inventarusuario').get((request, response) => {
    response.setHeader('Content-Type', 'application/json')
    response.status(200).send(generarUsuario())
})

crudUsuario.route('/usuario').get((request, response) => {
    response.setHeader('Content-Type', 'application/json')

    console.log(request.query)
    let objQuery:any = {}

    if (request.query.firstName) {
        objQuery.firstName = request.query.firstName;
    }

    if (request.query.lastName) {
        objQuery.lastName = request.query.lastName;
    }

    if (request.query.city) {
        objQuery.city = request.query.city;
    }
    
    // AGREGARLE city MISMA LOGICA

    query('anulomufa', 'usuario', objQuery)
    .then(data => response.status(200).send(data))
    .catch(err => response.status(500).end())
})

crudUsuario.route('/usuario/:id').get((request, response) => {
    query('anulomufa', 'usuario', {id:request.params.id})
    .then(data => { 
        if (data.length === 0) {
            response.status(404).end()
            return
        }
        response.status(200).send(data[0])
    })
    .catch(err => response.status(500).end())
})

crudUsuario.route('/usuario/:id/:algomas').get((request, response) => {
    response.status(200).send({ahora:request.params.algomas})
})

crudUsuario.route('/usuario').post((request, response) => {
    console.log(typeof request.body)
    let contenido = request.body
    insert('anulomufa', 'usuario', contenido)
    .then(() => { response.status(201).end() })
    .catch(() => { response.status(500).end() })    
})

crudUsuario.route('/usuario/:id').put((request, response, next) => {
    // Tiene que buscar si existe ese id.
    // si NO existe ? 404 NotFound
    // Si existe, reemplaza al existente con el objeto enviado

    let id = request.params.id

    console.log({id})

    query('anulomufa', 'usuario', {id})
    .then(data => { 
        if (data.length === 0) {
            response.status(404).end()
            return
        }
        update('anulomufa', 'usuarios', id, request.body)
        .then(() => response.status(200).end())
        .catch(e => { 
            console.log('***********************')
            console.log('ingresa x aca')
            console.log('***********************')
            next(e)
         })
    })
    .catch(err => response.status(500).end())
})

crudUsuario.route('/usuario/:id').delete((request, response) => {
    let id = request.params.id
    deleteById('anulomufa', 'usuario', id)
    .then(() => response.status(200).end())
    .catch(() => { response.status(500).end() })
})

export default crudUsuario;