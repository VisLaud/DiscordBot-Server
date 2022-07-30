import express from 'express';
import controller from '../controllers/UserInfo';
import { ValidateSchema, Schemas } from '../middleware/ValidateSchema';

const router = express.Router();

router.post(
  '/setStatus',
  ValidateSchema(Schemas.userInfo.setStatus),
  controller.setUserStatus
);
router.get('/getStatus/:user', controller.getUserStatus);
router.post(
  '/create',
  ValidateSchema(Schemas.userInfo.createUser),
  controller.createUser
);

export = router;
