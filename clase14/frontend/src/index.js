import "./styles.css"
import "./controllers"
import {doLongPolling, enviarMensaje} from './ajax'
import {v4 as uuid} from 'uuid'

console.log("up n running");
alert('up n running')
alert('up n running 2')

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