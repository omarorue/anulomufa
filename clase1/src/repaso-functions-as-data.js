/*
En los lenguajes funcionales, 
1) Lazy, declarativo
2) Pero, javascript es funcional por otra cosa. Functions y Data es lo mismo.
*/

const fn = (x) => { console.log(x) }

const fn2 = (unaFuncion, numeroDeIteraciones) => {
    Array(numeroDeIteraciones).fill(0).forEach((v, idx, todoElArray) => {
        unaFuncion(idx)
    })
}

fn2(i=>{console.log('..'), console.log(i)}, 100)