const Project = require('../models/projects');

const ProjectController = {

  Create: async (req, res) => {

    console.log(req.body)

    const project = new Project({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,

      fname: req.body.fname,
      lname: req.body.lname,
      skill: req.body.skill,
      languages:
        req.body.languages
    ,
    postcode: req.body.postcode

    });
 

    await project.save().then((doc) => res.status(201).json(project)); //doc?

  },
};

module.exports = ProjectController;
