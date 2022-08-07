const { findOne } = require('../models/projects');
const Project = require('../models/projects');
const User = require('../models/user')

const ProjectController = {

  Create: async (req, res) => {
    const signedInUserId = "62eff044c98668c5a2f8d923" // change to take ID from sessions
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
      
    Project.find({
      $expr: {
        $in: [req.params.userid, "$users"]
      }
    })
      .populate("owner")
      .populate("users")
      .exec((err, projectsById) => {
                if (err) {
            throw err;  
          }
      return res.json(projectsById);
    });

    },    

    GetOneById: async (req, res) => {
      console.log(req.params.projectid);
        
      Project.findOne({ _id: req.params.projectid})
        .populate("owner")
        .populate("users")
        .exec((err, projectById) => {
                  if (err) {
              throw err;  
            }
        return res.json(projectById);
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
