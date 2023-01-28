import "./styles.css"
import {enviarMensaje, longPolling} from './ajax'

longPolling(() => {})

document.addEventListener('click', e => {
    e.stopPropagation()

    switch (e.target.id) {
        case 'btnEnviar':
            enviarMensaje()
            break;
    }
})
