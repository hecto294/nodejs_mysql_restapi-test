import { Router } from 'express';

import { ping } from './scr/controllers/index.controller.js';
const router = Router()

router.get('/ping', ping)
export default router