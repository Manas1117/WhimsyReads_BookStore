import express from 'express';
import { Singup , login } from '../Controller/user.controller.js';

const router = express.Router();

router.post('/signup',Singup)
router.post('/login',login)

export default router;