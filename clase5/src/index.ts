import generarUsuario from './lib/genusuario'

/*
console.log("hola mundo")

let variable1:number = 20
let variable2 = variable1

type PredicateFunction = () => boolean

let fn:PredicateFunction

fn = () => {
    console.log('estoy en fn')
    return true
}

let a = fn()
*/

let esPar:(x:number) => boolean|string = (x) => {
    if (0) {
        return "love"
    }
    return (x%2===0) ? true : false
}

let concatenar:(x:string, y:string) => string = (x, y) => {
    return x.concat(y)
}

let s = esPar(20)

if (typeof s === 'string') {
    concatenar(s, s)
}

let usu = generarUsuario()

console.log(usu)
console.log(usu)

let trampa = () => {
    setTimeout(trampa, 2000)
}
trampa()