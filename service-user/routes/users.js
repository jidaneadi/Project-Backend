const express = require('express');
const router = express.Router();
const userHandler = require('./handler/users')

//sintaks yang dibawah ini harus sesuai dg yang ada pada api-gateway di folder handler
router.post('/register', userHandler.register);
// router.post('/login', userHandler.login);
router.put('/update/:id', userHandler.update);
// router.get('/user/:id', userHandler.getUser);
router.get('/', userHandler.getUsers);
// router.delete('/delete/:id', userHandler.delUser);

module.exports = router;
