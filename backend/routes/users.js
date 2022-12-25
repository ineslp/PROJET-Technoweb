const express = require('express');
const router  = express.Router();
const usersController = require('../controllers/users');

const multer = require('multer');
const upload = multer();

router.get('/users', usersController.getAllUsers);
router.post('/users', usersController.newUsers);
router.delete('/users', usersController.deleteAllUsers);

router.get('/users/:name', usersController.getOneUsers);
router.post('/users/:name', usersController.newComment);
router.delete('/users/:name', usersController.deleteOneUsers);

router.post("/users", upload.none(), usersController.newUsers);

module.exports = router;


/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;*/
