export let verificarSession = (onFinish) => {
    // Lo que hay que hacer.
    // Sumar un endpoint que cumpla el objetivo de verificar que la session sigue viva
    // hacer fetch con get
}

export let login = (onFinish) => {
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({nomUsuario: "max", password : "max33RedBull"})
        })
        .then(function(response) {
            console.log('response =', response);
            return response.json();
        })
        .then(function(data) {
            console.log('data = ', data);            
            localStorage.setItem('jwt', data.token)
            onFinish(data)
        })
        .catch(function(err) {
            console.error(err);
        });
}

export let inventarUsuario = (onFinish) => {
    fetch('/inventarusuario', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'x-jwt': localStorage.getItem('jwt')
        }
        })
        .then(function(response) {
            console.log('response =', response);
            return response.json();
        })
        .then(function(data) {
            console.log('data = ', data);
            onFinish(data)
        })
        .catch(function(err) {
            console.error(err);
        });
}

export let traerAlumnos = (onFinish) => {
    fetch('/alumno', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'x-jwt': localStorage.getItem('jwt')
        }
        })
        .then(function(response) {
            console.log('response =', response);
            return response.json();
        })
        .then(function(data) {
            console.log('data = ', data);
            onFinish(data)
        })
        .catch(function(err) {
            console.error(err);
        });
}

export let borrarAlumno = (idAlu, onFinish) => {
    let url = ['/alumno/', idAlu].join('')
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'x-jwt': localStorage.getItem('jwt')
        }
        })
        .then(function(response) {
            console.log('response =', response);
            if (response.status === 200) {
                onFinish(null)
                return
            }
            onFinish(new Error('NO SE PUDO BORRAR'))
        })
        .catch(function(err) {
            onFinish(err);
        });
}

