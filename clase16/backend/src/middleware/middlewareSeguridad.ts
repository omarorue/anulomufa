import { verificarToken } from '../lib/jwtutils'

export default () => (request, response, next) => {
    console.log('ingresa al middleware de seguridad')

    if (request.url === '/login') {
        console.log('entra x aca...')
        next()
        return
    }

    if (request.headers['x-jwt'] === undefined) {
        response.status(401).end()
        return
    }
    let token = request.headers['x-jwt']

    let esValido = verificarToken(token)

    if (esValido === false) {
        response.status(401).end()
        return
    }

    next()
}
