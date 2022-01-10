const Role = require('../models/rol')
const Usuario = require('../models/usuario')

const esRoleValido = async (rol = '') => {
    const existeRole = await Role.findOne({rol})
    if(!existeRole){
        throw new Error(`El rol ${rol} no existe en la BD`)
    }   
}

const emailExiste = async (correo) => {
    const existeEmail = await Usuario.findOne({correo})
    if(existeEmail) {
        throw new Error(`email: ${correo} ya existe`)        
    }
}

module.exports = {
    esRoleValido, emailExiste
}