import { Router } from "express";
import { getfichas, createficha, updateficha, deleteficha,getficha } from "../routes/src/controllers/fichas.controller.js";

const router = Router()

router.get('/ficha', getfichas)
router.get('/ficha/:id', getficha)
router.post('/ficha', createficha)
router.patch('/ficha/:id', updateficha)
router.delete('/ficha/:id', deleteficha)
export default router