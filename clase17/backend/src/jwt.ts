import { generarToken, verificarToken } from './lib/jwtutils'


let payload = {
    sub: '123456789',
    name: 'max',
    role: 'ROLE_PORTERIA'
}

let token = generarToken(payload)

console.log(token)

setTimeout(() => {
    console.log("verificacion de token: ", verificarToken(token))
}, 31000)

