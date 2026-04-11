import { Router } from "express";
import { getinstructores, createinstructor, updateinstructor, deleteinstructor } from "../routes/src/controllers/instructor.controller.js";
const router = Router()
router.get('/instructor', getinstructores)
router.post('/instructor', createinstructor)
router.put('/instructor/:id', updateinstructor)
router.delete('/instructor/:id', deleteinstructor)
export default router