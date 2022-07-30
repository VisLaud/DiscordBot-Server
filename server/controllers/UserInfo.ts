import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import UserInfo from '../model/userInfo';

const getUserStatus = (req: Request, res: Response, next: NextFunction) => {
  return UserInfo.findOne({ user: req.params.user })
    .then((status) => res.status(200).json({ response: status }))
    .catch((error) => res.status(500).json({ error }));
};

const setUserStatus = (req: Request, res: Response, next: NextFunction) => {
  return UserInfo.updateOne(
    { user: req.body.user },
    { status: req.body.status }
  )
    .then((status) => {
      if (status) {
        res.status(201).json({ response: status });
      } else {
        return res.status(404).json({ message: 'not found' });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { user } = req.body;
  const newUser = new UserInfo({
    _id: new mongoose.Types.ObjectId(),
    user: user,
    status: true,
  });

  return newUser
    .save()
    .then((user) => res.status(201).json({ user }))
    .catch((error) => res.status(500).json({ error }));
};

export default { getUserStatus, setUserStatus, createUser };
