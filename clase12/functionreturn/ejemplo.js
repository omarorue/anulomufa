let esperar = () => {
   let status = 0;
   console.log('lo dejo en estado wait ...')
   let seguir = () => {      
      status = 1;
      console.log('sigo con la funcionalidad')
   }   
   return seguir;
}


let continuar = esperar()
console.log('Haciendo una tarea particular')
setTimeout(() => { console.log('Termino la tarea puntual')
    continuar()
}, 4000)


let [variable, setVariable] = React.UseState(10)

