import {Router} from "express";
import { login } from '../services/login.js';
export const system = Router();
import  { authmiddleware } from '../middlewares/login.authencation.js'; 
import { checkuser } from '../middlewares/user.check.js';
import { signup } from '../services/signup.js';

system.post('/login',authmiddleware, login);
system.post('/signup',checkuser,signup);