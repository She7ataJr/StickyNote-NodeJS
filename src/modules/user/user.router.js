import {Router} from 'express'
import { auth } from '../../middleware/auth.js';
import * as userController from  './controller/user.controller.js'
const router = Router();


router.get("/" , userController.getUsers)
router.get("/profile",auth,userController.getProfile)
router.patch("/" , auth,userController.updateUser)
router.delete("/" ,auth, userController.deleteUser)


export default  router