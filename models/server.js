const express = require('express')
const cors = require('cors')
require('dotenv').config()

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        // Middlewares
        this.middlewares()

        // Rutas de mi aplicación
        this.routes()
    }

    middlewares() {
        // CORS
        this.app.use(cors())

        // Lectura y Parseo del Body
        this.app.use(express.json())

        // Directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server activo en http://localhost:${this.port}`)
        })
    }
}

module.exports = Server