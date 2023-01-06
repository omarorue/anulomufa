import {verificarSession} from './ajax'

let checkstatus = () => {
    let token = localStorage.getItem('token')
    if (token == undefined) {
        console.log(token)
        document.getElementById('statusActual').innerHTML = 'deslogueado'
    }
    else {
        // Tengo que validarlo contra el back
        document.getElementById('statusActual').innerHTML = 'hay token'
    }
    setTimeout(checkstatus, 2000)
}

checkstatus()