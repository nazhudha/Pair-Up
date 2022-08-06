const express = require("express");
const router = express.Router();

const ProjectController = require("../controllers/projects")

router.get("/getallprojects", ProjectController.All);

router.post("/createproject", ProjectController.Create);

module.exports = router;