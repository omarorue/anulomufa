import { Router, Express } from 'express'
import generarUsuario from '../lib/genusuario'
import {insert, query, update, deleteById} from '../lib/clienteMongo'

let crudAlumno = Router();

crudAlumno.route('/inventaralumno').get((request, response) => {
    response.setHeader('Content-Type', 'application/json')
    response.status(200).send(generarUsuario())
})

crudAlumno.route('/alumno').get((request, response) => {
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

    query('anulomufa', 'alumno', objQuery)
    .then(data => response.status(200).send(data))
    .catch(err => response.status(500).end())
})

crudAlumno.route('/alumno/:id').get((request, response) => {
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

crudAlumno.route('/alumno/:id/:algomas').get((request, response) => {
    response.setHeader('Content-Type', 'application/json')
    response.status(200).send({ahora:request.params.algomas})
})

crudAlumno.route('/alumno').post((request, response) => {
    console.log(typeof request.body)
    let contenido = request.body
    insert('anulomufa', 'alumno', contenido)
    .then(() => { response.status(201).end() })
    .catch(() => { response.status(500).end() })    
})

crudAlumno.route('/alumno/:id').put((request, response) => {
    response.setHeader('Content-Type', 'application/json')
    
    // Tiene que buscar si existe ese id.
    // si NO existe ? 404 NotFound
    // Si existe, reemplaza al existente con el objeto enviado

    let id = request.params.id

    console.log({id})

    query('anulomufa', 'alumno', {id})
    .then(data => { 
        if (data.length === 0) {
            response.status(404).end()
            return
        }
        update('anulomufa', 'alumnos', id, request.body)
        .then(() => response.status(200).end())
        .catch(() => { response.status(500).end() })
    })
    .catch(err => response.status(500).end())
})

crudAlumno.route('/alumno/:id').delete((request, response) => {
    response.setHeader('Content-Type', 'application/json')

    let id = request.params.id
    deleteById('anulomufa', 'alumno', id)
    .then(() => response.status(200).end())
    .catch(() => { response.status(500).end() })
})

export default crudAlumno;