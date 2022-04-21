const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const middleware = require('../middleware/midd')

router.post('/addUser', userController.addUser)
router.post('/login', userController.userLogin)
router.get('/userList', userController.userList)
router.put('/userList/:userId', middleware.middAuth, userController.updateuser)
router.delete('/user/:userId', middleware.middAuth, userController.deleteUser)


module.exports = router;