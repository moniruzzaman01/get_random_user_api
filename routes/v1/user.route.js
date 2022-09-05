const express = require('express');
const router=express.Router();
const userController=require('../../controller/user.controller')


router.route('/random').get(userController.getRandomUser)
router.route('/all').get(userController.getAllUser)
router.route('/save').get(userController.saveUser)
router.route('/update').get(userController.updateUser)
router.route('/bulk-update').get(userController.updateMultipleUser)
router.route('/delete').get(userController.deleteUser)


module.exports=router;