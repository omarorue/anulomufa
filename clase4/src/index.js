// 1) Crear 100 archivos en la carpeta que tenemos configurada
// 2) Utilizar alguna funcion para leer los archivos de esa misma carpeta
// 3) mostrar los archivos por pantalla

let fs = require('fs')

let leerCarpetaAsync = async () => {
    return await new Promise((resolve, reject) => {
        fs.readdir('/cursos/anulomufa/clase4', 'utf-8', (err, archivos) => {
            if (err) {
                console.log(err)
                return
            }
            resolve(archivos)
        })
    })
}

leerCarpetaAsync()
.then(archivos => {
    archivos.forEach((archivo, subindice, elArrayCompleto) => {
        // console.log(subindice, archivo)
    });
})

let array = [1, 2, 3, 4, 5]

/*
array.forEach(z => {
    console.log(z * z)
})
*/

// console.log('mustro el map: ', array.map(z => { return { numeroz : z }}))

console.log('vamos a trabajar con el input: ', array)
console.log('total reduce: ', array.reduce((acumulado, item) => {
    console.log('acumulado hasta aca: ', acumulado)
    console.log('item actual: ', item)
    return [acumulado, item]
}, 1))

