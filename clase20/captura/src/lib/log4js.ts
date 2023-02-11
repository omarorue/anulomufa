import log4js from 'log4js'

log4js.configure({
    appenders : {
        archivo: {
            type: 'file',
            filename: '/var/milanesajs/logs/log.log'
        },
        consola: {
            type: 'stdout'
        }
    },
    categories: {
        default: {
            appenders: ['archivo', 'consola'],
            level: 'info'
        }
    }
})

export default log4js