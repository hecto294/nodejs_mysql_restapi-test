import { Router } from "express";
import { getaprendices, createaprendiz, updateaprendiz, deleteaprendiz } from "../routes/src/controllers/aprendices.controllers.js";
const router = Router()
router.get('/aprendices', getaprendices)
router.post('/aprendices', createaprendiz)
router.put('/aprendices/:id', updateaprendiz)
router.delete('/aprendices/:id', deleteaprendiz)
export default router