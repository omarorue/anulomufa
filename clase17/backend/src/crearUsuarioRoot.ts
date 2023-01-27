import {insert} from './lib/clienteMongo'
import {v4 as uuid} from 'uuid'
import sha256 from 'sha256'

let id = uuid()
let nomUsuario = "root"
let passwordEnClear = "root"

let salt = [uuid(), uuid()].join('__')

let password = sha256([passwordEnClear, salt].join(''))

let objGuardar = {id, nomUsuario, password, salt}

insert('anulomufa', 'usuarios', objGuardar)
.then(z => console.log('usuario root creado correctamente'))
.catch(err => { console.log(err) })
