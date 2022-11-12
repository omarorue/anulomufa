let conectar = baseDeDatos => table => insert => {
    return [baseDeDatos, table, insert];
}

let insertarPartido = conectar('Base Mundialista')('partidos')

let res1 = insertarPartido('Argentina vs Arabia Saudita')
let res2 = insertarPartido('Argentina vs Mexico')

console.log(res1)
console.log(res2)

