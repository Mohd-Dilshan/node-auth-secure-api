import express from 'express';
import { postLogin, postRegister } from '../controller/auth.controller.js';
// auth.routes.js
const router = express.Router();

// http://localhost:3000/api/auth/register
router.post('/register', postRegister);
router.post('/login', postLogin);

export default router;