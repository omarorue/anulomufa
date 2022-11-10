/*
Solo callstack
*/

;(function() {
    const m6 = () => {
        console.log('LLEGO ...')
    }
    const m5 = () => {
        console.log('Antes de llamar a m6')
        m6()
        console.log('despues de llamar a m6')
    }
    const m4 = () => {
        console.log('Antes de llamar a m5')
        m5()
        console.log('despues de llamar a m5')
    }
    const m3 = () => {
        console.log('Antes de llamar a m4')
        m4()
        console.log('despues de llamar a m4')
    }
    const m2 = () => {
        console.log('Antes de llamar a m3')
        m3()
        console.log('despues de llamar a m3')
    }
    const m1 = () => {
        console.log('Antes de llamar a m2')
        m2()
        console.log('despues de llamar a m2')
    }

    m1()
})



/*
callstack con manejo de errores
*/

;(function() {
    const m6 = (z) => {
        console.log('LLEGO ...', z)
        if (z === 0) {
            throw new Error('NO PUEDE SER ZERO')
        }
    }
    const m5 = (z) => {
        console.log('Antes de llamar a m6')
        m6(z + 1)
        console.log('despues de llamar a m6')
    }
    const m4 = (z) => {
        console.log('Antes de llamar a m5')
        m5(z + 1)
        console.log('despues de llamar a m5')
    }
    const m3 = (z) => {
        console.log('Antes de llamar a m4')
        m4(z + 1)
        console.log('despues de llamar a m4')
    }
    const m2 = (z) => {
        console.log('Antes de llamar a m3')
        m3(z + 1)
        console.log('despues de llamar a m3')
    }
    const m1 = (z) => {
        console.log('Antes de llamar a m2')
        m2(z + 1)
        console.log('despues de llamar a m2')
    }

    try {
        m1(-5)
    }
    catch (err) {
        console.log('siga siga')
        console.log(err)
        console.log('siga siga')
    }
    
})


/*
callstack dentro de lo que es sincronico y asincronico
*/

;(function() {
    const m6 = (z) => {
        setTimeout(() => {
            console.log('EJECUTANDO CALLBACK !!!!')
        }, 0)
    }
    const m5 = (z) => {
        console.log('Antes de llamar a m6')
        m6(z + 1)
        console.log('despues de llamar a m6')
    }
    const m4 = (z) => {
        console.log('Antes de llamar a m5')
        m5(z + 1)
        console.log('despues de llamar a m5')
    }
    const m3 = (z) => {
        console.log('Antes de llamar a m4')
        m4(z + 1)
        console.log('despues de llamar a m4')
    }
    const m2 = (z) => {
        console.log('Antes de llamar a m3')
        m3(z + 1)
        console.log('despues de llamar a m3')
    }
    const m1 = (z) => {
        console.log('Antes de llamar a m2')
        m2(z + 1)
        console.log('despues de llamar a m2')
    }

    try {
        m1(-5)
    }
    catch (err) {
        console.log('siga siga')
        console.log(err)
        console.log('siga siga')
    }
    
})


/*
ejemplo extremo de pila vacia
*/

/*

setTimeout(() => { console.log('Quiero salir !!!!') }, 0)
for (;;) {}

*/

/*
ORDEN EN LOS CALLBACKS

LEO UN ARCHIVO Y HAGO UN SETTIMEOUT de 3ms

QUE CALLBACK SE EJECUTA PRIMERO ?????


LEO UN ARCHIVO Y DENTRO DEL CALLBACK, HAGO UN SETTIMEOUT

PRIMERO EL CALLBACK DEL ARCHIVO, Y LUEGO EL CALLBACK DEL SETTIMEOUT

*/


/**
 * Otro tema con el stack
 * javascript, c#, php, c, c++, java NO estan optimizados para hacer recursion.
 */

const fnRec = (x) => {
    console.log(x)
    setTimeout(() => fnRec(x + 1), 0)
}

fnRec(1)

