import { Router, Express } from 'express'
import generarUsuario from '../lib/genusuario'
import {insert, query, update, deleteById} from '../lib/clienteMongo'
import {v4 as uuid} from 'uuid'
import sha256 from 'sha256'
import { generarToken } from '../lib/jwtutils'

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

    query('anulomufa', 'usuarios', objQuery)
    .then(data => response.status(200).send(data))
    .catch(err => response.status(500).end())
})

crudUsuario.route('/usuario/:id').get((request, response) => {
    query('anulomufa', 'usuarios', {id:request.params.id})
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

crudUsuario.route('/crearUsuario').post((request, response) => {
    console.log(typeof request.body)
    let contenido = request.body
    
    console.log(contenido)

    let {id,nomUsuario,password:passwordEnClear} = contenido

    let salt = [uuid(), uuid()].join('__')

    let password = sha256([passwordEnClear, salt].join(''))

    let objGuardar = {id, nomUsuario, password, salt}

    insert('anulomufa', 'usuarios', objGuardar)
    .then(() => { response.status(201).end() })
    .catch(() => { response.status(500).end() })
})

crudUsuario.route('/login').post((request, response) => {
    console.log(typeof request.body)
    let contenidoPost = request.body
    let {nomUsuario} = contenidoPost    
    
    query('anulomufa', 'usuarios', {nomUsuario})
    .then(data => {
        console.log('Datos extraidos de la collection usuarios')
        console.log(data)

        if (data.length === 0) {
            response.status(401).end()
            return
        }
        let datum = data[0]
        
        let {password:passwordEncriptada, salt} = datum

        let reecriptacion = sha256([contenidoPost.password+salt].join(''))

        console.log(passwordEncriptada)
        console.log(reecriptacion)

        if (passwordEncriptada === reecriptacion) {
            let payload = {
                sub: datum.id,
                name: 'max',
                role: 'ROLE_PORTERIA'
            }
            let token = generarToken(payload)
            response.status(200).send({token})
            return
        }

        response.status(401).end()
    })
    .catch(() => { response.status(500).end() })

    /***************************************
     * Como es un login
     * 
     * 1) Si existe el usuario en la coleccion
     * 2) la password que venga en el body la voy a encriptar
     * 3) dado que en la coleccion esta encriptada.
     *    Las comparo y si son identicas, quiere decir que la password es correcta
     * 
     * 3a) Si la password es incorrecta ? Se envio un 403 forbidden
     * 3b) Si la password es correcta, se envia un 200 y un token
     * 
     * El token es para establecer una especie de contrato entre el cliente y el http server
     * Una especie de session -porque estoy autenticandome todo el tiempo, por cada request-.
     * 
     * 
     *  ¿ Como es el proceso de encriptacion ?
     * 
     * Se utilizan unos algorimos que se llaman hashing.
     * Esto convierten de texto plano a 256 bits no reconocibles
     * 
     * Cual es el problema, que si bien [NO es reversible]
     * Hay gente que se crea diccionarios de palabras simples y luego hace ingenieria inversa
     * 
     * salt: este es un concepto que se usa bastante. Se le agrega una cadena de caracteres un poco
     * 64 Bytes y de esa forma, no hay diccionario que aguante.
     * 
     */




    
    /*
    insert('anulomufa', 'usuarios', contenido)
    .then(() => { response.status(201).end() })
    .catch(() => { response.status(500).end() })    
    */
})

crudUsuario.route('/usuario/:id').put((request, response, next) => {
    // Tiene que buscar si existe ese id.
    // si NO existe ? 404 NotFound
    // Si existe, reemplaza al existente con el objeto enviado

    let id = request.params.id

    console.log({id})

    query('anulomufa', 'usuarios', {id})
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
    deleteById('anulomufa', 'usuarios', id)
    .then(() => response.status(200).end())
    .catch(() => { response.status(500).end() })
})

export default crudUsuario;