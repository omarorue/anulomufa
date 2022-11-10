/*
Que es el scope ?
El scope es el alcance que tiene una [variable?] desde donde hasta donde tiene su ciclo de vida.
                                    identificador


*/

/*
la keyword var, crea un identificador donde su scope es toda la funcion que la encapsula
*/

"use strict"

function demostrarLaKeywordVar() {
    
    function innerFunction() {
        var scopeDelIdentificador = 0        

        if (2 === 2) {
            console.log(scopeDelIdentificador)
        }
        scopeDelIdentificador = 2
    }    
    innerFunction()
}

/*
La keyword let, mas ajustada con los lenguajes imperativos, como c, c++, c#, java, tiene como su scope
desde una llave de apertura hasta una llave de cierre.
*/

{
    // Es un scope
    
    {
        let miVar = 3
        console.log(miVar)
    }   
    
}
{
    
}

/*
la keyword const, lo que hace es igual que el let, por llaves. pero define identificadores constantes.
*/

{
    const MI_CONSTANTE = 4
    MI_CONSTANTE++
}

