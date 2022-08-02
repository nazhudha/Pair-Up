const User = require('../models/user');

const ProfileController = {
  Me: async (req, res) => {
    console.log('!!!');
    console.log(req);
    const profile = await User.findOne({ username: req.session.user });
    //return res.json('profile');
    res.render('profile/me');
  },

  All: async (req, res) => {},
};

module.exports = ProfileController;
