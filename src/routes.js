import {Router} from 'express';

const router = Router();
import SendMessageController from './controller/SendMessageController';

router.get('/', SendMessageController.handle)

export {router};