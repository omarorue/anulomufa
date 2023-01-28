import "./styles.css"

/*
import "./controllers"
import {doLongPolling, enviarMensaje} from './ajax'
import {v4 as uuid} from 'uuid'
*/

import {longPolling} from './ajax'

longPolling(() => {})

/*
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



let pasamanos = async () => {
    try {
        for (let i = 0; i < 50; i++) {
            let alumno = await inventarUsuario()
            let resp = await insertarAlumno(alumno)
            console.log(resp)
        }
    }
    catch (err) {
        console.log(alumno)
    }
}

pasamanos()

*/