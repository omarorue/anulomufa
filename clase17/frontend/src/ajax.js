export let longPolling = async (onNewMessage) => {
    // /api/suscribe/:id
    let url = '/api/suscribe/' + localStorage.getItem('usuarioLogueado')
    let resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        }})

    let respJson = await resp.json()
    console.log(respJson)
    if (respJson.status === 'TIME_OUT') {
        longPolling(onNewMessage);
        return
    }
    if (respJson.status === 'NEW_MESSAGE') {
        let txtMessages = document.getElementById('txtMensajes').innerHTML
        document.getElementById('txtMensajes').innerHTML = txtMessages + '\r\n' + respJson.data
        longPolling(onNewMessage);
        return
    }
}

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

export let inventarUsuario = async (onFinish) => {
    let resp = await fetch('/inventarusuario', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'x-jwt': localStorage.getItem('jwt')
        }})

    let respJson = await resp.json()
    return respJson
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

export let insertarAlumno = async (objAlu) => {
    let resp = await fetch('/alumno', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'x-jwt': localStorage.getItem('jwt')
        },
        body: JSON.stringify(objAlu)
        })

    console.log(resp)
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

