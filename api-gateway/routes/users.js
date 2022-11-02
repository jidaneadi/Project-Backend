var express = require('express');
var router = express.Router();
const usersHandler = require('./handler/users');


//Sintax dibawah tidak harus sesuai dg ada yang ada di file di handler/users
router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);
router.get('/get/:id', usersHandler.getUser);
// router.get('/', usersHandler.getUsers);
router.put('/update/:id', usersHandler.update);
router.delete('/delete/:id', usersHandler.delUser);

module.exports = router;
