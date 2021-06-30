//router index file
import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();
router.get('/user', UserController.getUser);
router.post('/user', UserController.addUser);

export default router;