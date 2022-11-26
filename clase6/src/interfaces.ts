class SaludoVecino {
    private nombre:string;

    constructor(nombre:string) {
        this.nombre = nombre
    }

    saludar():void {
        console.log('Saludo a: ', this.nombre)
    }
    despedir():void {
        console.log('adios a: ', this.nombre)        
    }
}

export default () => {
    console.log('aca esta el modulo')

    let s:SaludoVecino
    s = new SaludoVecino('Juan Maria del 3H')    
    s.saludar()
    s.despedir()
    
    s = new SaludoVecino('Maria Marta del 8')
    s.saludar()
    s.despedir()
}
