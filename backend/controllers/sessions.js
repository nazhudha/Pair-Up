const User = require('../models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');

const SessionsController = {
  New: (req, res) => {
    res.render('/', {});
  },

  Error: (req, res) => {
    res.render('/', {});
  },

  Create: async (req, res) => {
    //console.log(req.session);
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (user) {
      const validPassword = await bcrypt.compare(body.password, user.password);
      if (validPassword) {
        res.status(200);
        //console.log(session.user);
        req.session.user = user;
        console.log(req.session);
        res.redirect('/');
      } else {
        res.status(400).redirect('/');
      }
    } else {
      res.status(401).redirect('/');
    }
  },
};

module.exports = SessionsController;
