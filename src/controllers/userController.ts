import { Request, Response } from 'express';
import { User } from '../models/User';
import { usersService } from '../services/usersService';

export const userController = {
  users: async (req: Request, res: Response) => { },
  user: async (req: Request, res: Response) => { },
  newUser: async (req: Request, res: Response) => {
    try {
      const user = await usersService.createNew(req, res);
      return user;
    } catch (err) {
      res.status(500).json({
        error: 'Internal server error'
      })
    }
  },
  updateUser: async (req: Request, res: Response) => { },
  deleteUser: async (req: Request, res: Response) => { }
}

export const users = async (req: Request, res: Response) => {
  return await User.findAll()
    .then(result => res.status(200).json(result))
}

export const user = async (req: Request, res: Response) => {
  let id = parseInt(req.params.id);

  try {
    if (id) {
      await User.findOne({ where: { id } })
        .then(result => res.status(200).json(result))
    }
  } catch (err) {
    res.status(500).json({
      message: 'internal server error',
    })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  let id = parseInt(req.params.id);
  let { name, age } = req.body;

  try {
    if (id) {
      await User.update({ name, age }, { where: { id } })
      res.status(200).json({
        message: 'user updated',
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  let id = parseInt(req.params.id);

  try {
    if (id) {
      await User.destroy({ where: { id } })
      res.status(200).json({
        message: 'user deleted',
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
}