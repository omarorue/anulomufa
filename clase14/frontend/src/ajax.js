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
        body: JSON.stringify({nombreUsu: "max", password : "max33redBull"})
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

export let retirarMensaje = ({idMensaje}, onMessageRecieved) => {
    let url = ['/api/retirar/', idMensaje].join('')
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        }})
    .then(function(response) {
            console.log('response =', response);
            return response.json();
    })
    .then(function(data) {
        console.log('data************* = ', data);
        onMessageRecieved(data.msg)
    })
    .catch(function(err) {
        console.error(err);
    });
}

export let enviarMensaje = (msg, onFinish) => {
    let idDest = document.getElementById('idDestinatario').value
    let url = ['/api/notify/', idDest].join('')    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({msg})
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


export let doLongPolling = (guid, onMessageRecieved) => {
    let url = ['/api/listen/', guid].join('')
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        }})
    .then(function(response) {
            console.log('response =', response);
            return response.json();
    })
    .then(function(data) {
        console.log(data)
        if (data.status === 'TIMEOUT') {
            doLongPolling(guid, onMessageRecieved)
            return
        }
        if (data.status === 'NEW_MESSAGE') {
            doLongPolling(guid, onMessageRecieved)
            retirarMensaje(data, onMessageRecieved)
        }
    })
    .catch(function(err) {
        console.error(err);
    });
}