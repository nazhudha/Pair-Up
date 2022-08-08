const User = require("../models/user");

const ProfileController = {
  Me: async (req, res) => {
    const profile = await User.findOne({ username: req.session.user.username });
    return res.json(profile);
  },

  All: async (req, res) => {
    const allUsers = await User.find();
    return res.json(allUsers);
  },

  AddFriend: async (req, res) => {
    console.log(req.body)
    console.log(req.params)
    const friend = await User.findById(req.body._id)
    await User.updateOne(
      {
        _id: req.params.id,
     
      },
      {
        $addToSet: { friends: req.body._id},

  
        
      },
      {
        upsert: true,
        runValidators: true
      });
    
      res.status(201).send("joined the project!")
  },

};

module.exports = ProfileController;
