/*
import "./styles.css"
import "./controllers"
import {doLongPolling, enviarMensaje} from './ajax'
import {v4 as uuid} from 'uuid'
*/

import {login, inventarUsuario, traerAlumnos, borrarAlumno} from './ajax'

console.log("up n running");



document.addEventListener('click', e => {
    e.stopPropagation()

    let hasClass = e.target.classList.contains('js-botonBorradoUsuario');

    if (hasClass) {
        borrarAlumno(e.target.dataset.idborrar, (err) => {
            if (err) {
                alert(err)
                return
            }
            alert('Borrado correctamente !!!')
            traerAlumnos(xs => renderizarAlumnos(xs))
        })
    }


    if (hasClass) {
        return
    }

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
                renderizarAlumnos(resp)
            })
            break;
    }
})

let renderizarAlumnos = (arrAlu) => {
    let tmpl = document.getElementById('templateTablaUsuarios').innerHTML
    let cocinado = Mustache.render(tmpl, { alumnos: arrAlu})
    document.getElementById('tablaUsuarios').innerHTML = cocinado
}


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