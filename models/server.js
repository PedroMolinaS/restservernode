const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { dbConnection } = require('../database/config')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        // Conectar a la base de datos
        this.conectarDB()

        // Middlewares
        this.middlewares()

        // Rutas de mi aplicación
        this.routes()
    }

    async conectarDB(){
        await dbConnection()
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