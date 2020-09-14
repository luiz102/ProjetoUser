const express = require('express');
const UsuarioController = require ('../controllers/usuarioController.js');
const router = express.Router();

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios',UsuarioController.SelectAll);
router.get('/usuarios/:id',UsuarioController.SelectDetail);
 
module.exports = router;
