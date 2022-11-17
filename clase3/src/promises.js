let unaFuncion = (mensaje, onFinish) => {
    console.log(mensaje)
    setTimeout(() => {
        onFinish(null)
    }, 1000)
}

let unaFuncionPromise = (mensaje) => {
    // En el constructor del objeto promise se registra un callback
    return new Promise((resolve, reject) => {
        unaFuncion(mensaje, (err) => {
            if (err) {
                reject(err)
                return
            }
            resolve()
        })
    })
}

unaFuncionPromise('hola que tal')
.then(() => unaFuncionPromise('como va'))
.then(() => unaFuncionPromise('que onda'))
.then(() => unaFuncionPromise('y tu ?'))
.then(() => unaFuncionPromise('y tu ?'))
.then(() => unaFuncionPromise('good ????'))
.then(() => console.log('YA TERMINO EL INFIERNO DE CALLBACKS'))
.catch(err => {
    console.log(err)
})
