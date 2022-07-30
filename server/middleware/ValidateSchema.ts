import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import Logging from '../lib/Logging';
import { iUserInfo } from '../model/userInfo';

export const ValidateSchema = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      Logging.error(error);
      return res.status(422).json(error);
    }
  };
};

export const Schemas = {
  userInfo: {
    setStatus: Joi.object<iUserInfo>({
      user: Joi.string().required(),
      status: Joi.boolean().required(),
    }),
    createUser: Joi.object<iUserInfo>({
      user: Joi.string().required(),
    }),
  },
};
