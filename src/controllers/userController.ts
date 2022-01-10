import { Request, Response } from 'express';
import { User } from '../models/User';
import { usersService } from '../services/usersService';

export const userController = {
  users: async (req: Request, res: Response) => {
    try {
      const users = await usersService.getAllUsers();
      return res.status(200).json(users);
    } catch (err) {
      res.status(500).json({
        error: 'Internal server error'
      })
    }
  },
  user: async (req: Request, res: Response) => {
    let id = parseInt(req.params.id);
    try {
      const user = await usersService.getUser(id);
      if (user) {
        return res.status(200).json(user)
      } else {
        return res.status(404).json({ message: 'User not found' })
      }
    } catch (err) {
      return res.status(500).json({
        message: 'Internal server error'
      })
    }
  },
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
  updateUser: async (req: Request, res: Response) => {
    let id = parseInt(req.params.id);
    try {
      const user = await usersService.updateUser(id, req, res);
      return user;
    } catch (err) {
      res.status(500).json({
        error: 'Internal server error'
      })
    }
  },
  deleteUser: async (req: Request, res: Response) => {
    let id = parseInt(req.params.id);

    try {
      await usersService.deleteUser(id, res);
    } catch (err) {
      res.status(500).json({
        error: 'Internal server error'
      })
    }
  }
}