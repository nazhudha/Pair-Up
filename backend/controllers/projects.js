const Project = require('../models/projects');

const ProjectController = {

  Create: async (req, res) => {

    const project = new Project({
      owner: "62ebab3246601bb290812d9e", // change back to req.body.owner
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

  AllById: async (req, res) => {
    console.log(req.params.userid);
      
    Project.find({ owner: req.params.userid})
      .populate("owner")
      .exec((err, projectsById) => {
                if (err) {
            throw err;  
          }
      return res.json(projectsById);
    });

    },    
  

  All: async (req, res) => {
    const allProjects = await Project.find();
    return res.json(allProjects);
  },
};

module.exports = ProjectController;
