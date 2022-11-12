function suma(uno, dos, tres) {
    return uno + dos + tres
}

console.log('spread: ', suma(...[1, 2, 3]))
console.log('call: ', suma.call(null, 5, 5, 5))
console.log('apply: ', suma.apply(null, [5, 5, 5]))
console.log('curry o partial application: ', suma.bind(null, 5, 5, 5)())

