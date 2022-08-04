const Project = require('../models/projects');

const ProjectController = {

  Create: async (req, res) => {

    const project = new Project({
      owner: req.body.owner, 
      name: req.body.name,
      difficulty: req.body.difficulty,
      expectedProjectLength: req.body.expectedProjectLength,
      category: req.body.category,
      preferedSessionLength: req.body.preferedSessionLength,
      numberOfAdditionalUsersNeeded: req.body.numberOfAdditionalUsersNeeded,
      summary: req.body.summary,
      description: req.body.description,
      users: req.body.users,
      langWeHave: req.body.langWeHave,
      langWeNeed: req.body.langWeNeed,
      additionalSkillsNeeded: req.body.additionalSkillsNeeded,
      displayLocation: req.body.displayLocation,
      commitmentLevel: req.body.commitmentLevel
    
    });
 

    await project.save().then((doc) => res.status(201).json(project)); //doc?

  },
};

module.exports = ProjectController;
