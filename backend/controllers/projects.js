const { findOne } = require('../models/projects');
const Project = require('../models/projects');
const User = require('../models/user')

const signedInUserId = "62f007e5dd344fce0c132aa1" // change to take ID from sessions

const ProjectController = {

  Create: async (req, res) => {
    const signedInUser = await User.findOne({_id: signedInUserId})
    console.log(signedInUser)
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

  Join: async (req, res) => {
    console.log(req.params.projectid)
    try {
      const userjoining = await User.findById(signedInUserId)
      await Project.updateOne(
        {
          _id: req.params.projectid,
       
        },
        {
          $addToSet: { users: signedInUserId},
          userjoining.languages.each(lang => {
          $addToSet: { langWeHave: userjoining.languages },
           } )
          
        },
        {
          upsert: true,
          runValidators: true
        }
      )
        res.status(201).send("joined the project!")
      ;
    } catch (error) {
      res.status(400).send("Error: Can't join this project");
    }
    
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
