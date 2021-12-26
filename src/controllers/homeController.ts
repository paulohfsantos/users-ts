import { Request, Response } from 'express';
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to the home route',
  })
}

export const ping = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'pong',
  })
}