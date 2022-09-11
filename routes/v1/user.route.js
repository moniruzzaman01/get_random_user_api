const express = require("express");
const router = express.Router();
const userController = require("../../controller/user.controller");

router.route("/random").get(userController.getRandomUser);
router.route("/all").get(userController.getAllUser);
router.route("/save").post(userController.saveUser);
router.route("/update/:id").patch(userController.updateUser);
router.route("/bulk-update").get(userController.updateMultipleUser);
router.route("/delete").delete(userController.deleteUser);

module.exports = router;
