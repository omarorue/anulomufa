// vamos a crear un jwt

import {sign} from 'jsonwebtoken'

const SECRET = 'hola'

let hora = () => Math.floor(new Date().getTime() / 1000);

let payload = {
    sub: '123456789',
    name: 'max',
    iat: hora(),
    role: 'ROLE_PORTERIA'
}

let token = sign(payload, SECRET, {expiresIn: '30s'})

console.log(token)

