const User = require('../models/user');

const ProfileController = {
  Me: async (req, res) => {
    try {
      console.log(req.user);
      const profile = await User.findOne({
        _id: req.user.id,
      });
      if (!profile) {
        return res
          .status(400)
          .json({ msg: 'There is no profile for this user.' });
      }
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).status('Server Error.');
    }
  },
  All: async (req, res) => {
    const allUsers = await User.find();
    return res.json(allUsers);
  },
  User: async (req, res) => {
    console.log('!!!!');
    const profile = await User.findOne({
      _id: req.params.id,
    });
    return res.json(profile);
  },
};

module.exports = ProfileController;
