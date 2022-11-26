type stringToVoid = (s:string) => undefined

interface ISaludo {
    saludar: stringToVoid
}

class SaludoVecino implements ISaludo {
    saludar(nombre:string) {
        console.log('Saludo a: ', nombre)
        return undefined
    }
}

export default () => {
    console.log('aca esta el modulo')

    let s:SaludoVecino
    s = new SaludoVecino()
    s.saludar('Maria Marta del 8')
    s.saludar('Jose Luis del 3C')
}