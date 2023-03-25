import {Router} from 'express'
import * as authController from  './controller/auth.controller.js'
const router = Router();


router.get("/" , authController.getAuthModule)
router.post('/signup' , authController.signUp)
router.post("/login" , authController.login)
export default  router