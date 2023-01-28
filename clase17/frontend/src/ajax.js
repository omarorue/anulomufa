export let longPolling = async (onNewMessage) => {
    // /api/suscribe/:id
    let url = '/api/suscribe/' + localStorage.getItem('usuarioLogueado')
    let resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain',
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

export let enviarMensaje = async () => {
    let url = '/api/publish/' + document.getElementById('selDestinatario').value
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin':'*'
        },
        body: document.getElementById('txtNuevoMensje').value
        })
}
