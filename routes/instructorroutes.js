import { Router } from "express";
import { getinstructores, createinstructor, updateinstructor, deleteinstructor } from "../routes/scr/controllers/instructor.controller.js";
const router = Router()
router.get('/instructor', getinstructores)
router.post('/instructor', createinstructor)
router.put('/instructor/:id', updateinstructor)
router.delete('/instructor/:id', deleteinstructor)
export default router