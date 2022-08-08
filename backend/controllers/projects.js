const { findOne } = require('../models/projects');
const Project = require('../models/projects');
const User = require('../models/user')

const ProjectController = {

  Create: async (req, res) => {
    const signedInUserId = "62ebab3246601bb290812d9e" // change to take ID from sessions
    const signedInUser = await User.findOne({_id: signedInUserId})
    console.log(signedInUser.languages)
    const project = new Project({
      owner: signedInUserId, 
      name: req.body.name,
      difficulty: req.body.difficulty,
      expectedProjectLength: req.body.expectedProjectLength,
      category: req.body.category,
      preferedSessionLength: req.body.preferedSessionLength,
      numberOfAdditionalUsersNeeded: req.body.numberOfAdditionalUsersNeeded,
      summary: req.body.summary,
      description: req.body.description,
      users: [signedInUser],
      langWeHave: signedInUser.languages,
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
      .populate("users")
      .exec((err, projectsById) => {
                if (err) {
            throw err;  
          }
      return res.json(projectsById);
    });

    },    
  

  All: async (req, res) => {
    Project.find()
    .populate("owner")
    .populate("users")
    .exec((err, allProjects) => {
              if (err) {
          throw err;  
        }
    return res.json(allProjects);
    });
  }
}
module.exports = ProjectController;
