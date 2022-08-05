const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const dotenv = require('dotenv').config();

const AuthController = {
  Login: async (req, res) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Invalid Credentials.' }] });
    }

    payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      'SecretWebToken1234',
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  },
};

module.exports = AuthController;
