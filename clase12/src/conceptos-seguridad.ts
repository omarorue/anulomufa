import sha256 from 'sha256'
import {v4 as uuid} from 'uuid'

/*
La password que me llega este en clear (sin encriptar)
Esto es cuando se crea el usuario porque se crea con usuario:password
y cuando se autentica el usuario usuario:password

Dado que NO se puede guardar la password en clear, como se encripta
*/

let salt = [uuid(), uuid()].join('__')

let sha2Messi = sha256('messi' + salt)

console.log('Guardamos el hash')
console.log(sha2Messi)

// en el metodo de login me va a llegar usuario y passowrd

let passwordValidar = sha256('messi'+ salt)

if (sha2Messi === passwordValidar) {
    console.log('Las passwords coninciden')
}
else {
    console.log('Las passwords NO coninciden')
}