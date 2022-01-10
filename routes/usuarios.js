const { Router } = require('express')
const { check } = require('express-validator')
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios')
const { esRoleValido, emailExiste } = require('../helpers/db-validators')
const { validarCampos } = require('../middlewares/validar-campos')


const router = Router()

router.get('/', usuariosGet)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check('password', 'Password no válido').isLength({ min: 6 }),
    check('rol').custom( esRoleValido ),
    check('correo').custom(emailExiste),
    validarCampos
], usuariosPost)

router.put('/:id', usuariosPut)

router.delete('/', usuariosDelete)


module.exports = router