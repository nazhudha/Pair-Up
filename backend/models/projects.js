const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  owner: {
    type: mongoose.SchemaTypes.ObjectId
  },
  name: String,
  difficulty: String,
  expectedProjectLength: String,
  category: String,
  preferedSessionLength: Number,
  numberOfAdditionalUsersNeeded: Number,
  summary: String,
  description: String,
  users: [{
    type: mongoose.SchemaTypes.ObjectId,
}],
  langWeHave: [],
  langWeNeed: [],
  additionalSkillsNeeded: String,
  displayLocation: Boolean,
  commitmentLevel: String

});

module.exports = mongoose.model('Project', ProjectSchema);
