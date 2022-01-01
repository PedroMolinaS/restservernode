const { response } = require('express')

const usuariosGet = (req, res = response) => {
    const {q, nombre, apikey, page='1', limit='10'} = req.query
    res.json({
        ok: true,
        msg: 'get API - Controlador',
        q, nombre, apikey,page, limit
    })
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body
    res.status(201).json({
        ok: true,
        msg: 'post API - Controlador',
        nombre, edad
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