const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user")


router.get("/new", UserController.New);
router.post("/", UserController.Create);

module.exports = router;