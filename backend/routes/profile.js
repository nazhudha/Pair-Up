const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const ProfileController = require('../controllers/profile');

router.get('/me', auth, ProfileController.Me);
router.get('/all', ProfileController.All);
router.get('/:id', ProfileController.User);

module.exports = router;
