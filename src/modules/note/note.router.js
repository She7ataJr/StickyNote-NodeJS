import {Router} from 'express'
import { auth } from '../../middleware/auth.js';
import * as noteController from  './controller/note.controller.js'
const router = Router();


router.post("/" ,auth,noteController.addNote)
router.put ("/:id" ,auth,noteController.updateNote)
router.delete('/:id',auth,noteController.deleteNote)



export default  router