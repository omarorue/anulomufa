export let checkStrDef = (z:string|undefined):string => {
    if (typeof z === 'undefined') {
        throw new Error('Atencion que el valor de z NO esta definido')
    }
    return z
}

export let checkDef = <T>(z:T|undefined):T => {
    if (typeof z === 'undefined') {
        throw new Error('Atencion que el valor de z NO esta definido')
    }
    return z
}
