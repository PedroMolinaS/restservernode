const { response } = require('express')
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario')

const usuariosGet = (req, res = response) => {
    const {q, nombre, apikey, page='1', limit='10'} = req.query
    res.json({
        ok: true,
        msg: 'get API - Controlador',
        q, nombre, apikey,page, limit
    })
}

const usuariosPost = async (req, res = response) => {

    const {nombre, correo, password, rol, google = false} = req.body
    const usuario = new Usuario({nombre, correo, password, rol})

    // Verificar si el correo exite
    const existeEmail = await Usuario.findOne({correo})
    if(existeEmail) {
        return res.status(400).json({
            ok: false,
            msg: 'email ya existe'
        })
    }

    // Encriptar contraseña usuario
    const salt = bcryptjs.genSaltSync()
    usuario.password = bcryptjs.hashSync(password, salt)
    usuario.google = google


    // Guardar en BD
    await usuario.save()
    res.status(201).json({
        ok: true,
        msg: 'post API - Controlador',
        usuario
    })



}

const usuariosPut = (req, res = response) => {
    const { id } = req.params
    res.status(400).json({
        ok: true,
        msg: 'put API - Controlador',
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - controler'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}