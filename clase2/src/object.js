let unObjeto = {}

unObjeto.variable1 = 'puede ser un string, integer, function, etc'
unObjeto['variable2'] = 'aca lo bueno es que no tengo que saber el nombre de la key'

let nombreKey = Math.random().toString()

unObjeto[nombreKey] = 'Se el valor pero nunca la key'

console.log('un objeto', unObjeto)

for (let k in unObjeto) {
    console.log(k, unObjeto[k])
}
