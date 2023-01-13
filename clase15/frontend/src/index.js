/*
import "./styles.css"
import "./controllers"
import {doLongPolling, enviarMensaje} from './ajax'
import {v4 as uuid} from 'uuid'
*/

import {login, inventarUsuario, traerAlumnos} from './ajax'

console.log("up n running");



document.addEventListener('click', e => {
    e.stopPropagation()

    console.log(e.target.id)
    alert(e.target.id)
    switch (e.target.id) {
        case 'btnLogin':
            login(resp => {
                console.log(resp)
            })
            break;
        case 'btnInventar_LODEJO':
            inventarUsuario(resp => {
                console.log(resp)
            })
            break;
        case 'btnInventar':            
            traerAlumnos((resp) => {
                console.log(resp)
            })
            break;
    }
})


/*
{
    if (localStorage.getItem('chatId') === null) {
        localStorage.setItem('chatId', uuid())
    }
}

doLongPolling(localStorage.getItem('chatId'), (mensaje) => {
    document.getElementById('mensajes').innerHTML = 
    document.getElementById('mensajes').innerHTML + ['<div class="msgRecibido">RSP: ', mensaje, '<div />'].join('')
})

document.addEventListener('submit', e => {
    e.preventDefault()
    let texto = document.getElementById('textoEnviar').value
    document.getElementById('mensajes').innerHTML = 
    document.getElementById('mensajes').innerHTML + ['<div class="msgEnviado">', texto, '<div />'].join('')
    enviarMensaje(texto, () => {})
})
*/