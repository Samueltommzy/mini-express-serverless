const userController = require("../controllers/usercontroller");
const express = require("express");
const router = express.Router();

router.post("/createuser",userController.createUser);
router.get("/getuser",userController.getUser);
router.get("/getallusers",userController.getAllUsers);
router.post("/updateuser",userController.updateUser);

module.exports = router;