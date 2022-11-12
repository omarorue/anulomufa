let conectar = (baseDeDatos, table, insert) => {
    return [baseDeDatos, table, insert];
}

let callme = conectar.bind(null, 'Tarea terminada', 'Gracias por invocar a los servicios', 'anulomufa.com')

console.log(callme())
console.log(callme())
console.log(callme())
console.log(callme())

