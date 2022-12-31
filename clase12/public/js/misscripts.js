let sel = z => document.getElementById(z)

let traerUsuariosPorNombre = (firstName, onFinish) => {
   let url = [
      '/api/usuario?',
      'firstName=',
      firstName,
      //'&',
      //'city=Chicago'
   ].join('')
   fetch(url)
   .then(z => z.json())
   .then(z => onFinish(null, z))
   .catch(e => onFinish(e))
}

let displayDatosEnTabla = (data) => {
   let tmpl = sel('templateTablaUsuarios').innerText
   let res = Mustache.render(tmpl, {usuarios: data})
   sel('tablaUsuarios').innerHTML = res
}

let borrarUnUsuarioPorId = (id) => {
   let url = ['/api/usuario/', id].join('')
   fetch(url, {
       method: 'DELETE',
       headers: {
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin':'*'
       }
       })
       .then(function(response) {
           console.log('response =', response);
           return response.json();
       })
       .then(function(data) {
           console.log('data = ', data);
       })
       .catch(function(err) {
           console.error(err);
       });
}

traerUsuariosPorNombre('Miguel', (err, data) => {
   console.log('Vamos a ver todos los usuarios que se llaman miguel')
   console.log(data)
   displayDatosEnTabla(data)
})

document.addEventListener('click', e => {
   if (e.target.classList.contains('js-botonBorradoUsuario')===false) {
      return
   }
   let id = e.target.getAttribute('data-idBorrar')
   borrarUnUsuarioPorId(id)
})
