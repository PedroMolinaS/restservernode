const { Router } = require('express')
const { check } = require('express-validator')
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios')
const { validarCampos } = require('../middlewares/validar-campos')
const Role = require('../models/rol')

const router = Router()

router.get('/', usuariosGet)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check('password', 'Password no válido').isLength({ min: 6 }),
    // check('rol', 'Rol inválido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom( async (rol = '') => {
        const existeRole = await Role.findOne({rol})
        if(!existeRole){
            throw new Error(`El rol ${rol} no existe en la BD`)
        }   
    }),
    validarCampos
], usuariosPost)

router.put('/:id', usuariosPut)

router.delete('/', usuariosDelete)


module.exports = router