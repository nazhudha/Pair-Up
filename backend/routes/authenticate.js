const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authenticate');

const AuthController = require('../controllers/authenticate');

router.post('/', AuthController.Login);

module.exports = router;
