import { NextFunction, Request, Response } from 'express';
import { User } from '../models/User';

export const newUser = async (req: Request, res: Response) => {
  try {
    if (req.body.name !== undefined) {
      let username: string = req.body.name
      User.build({username})

      if (req.body.age !== undefined) {
        let userage: number = req.body.age
        User.build({userage})
      }
    }

    return res.status(200).json({
      message: 'usuario criado',
    })
  } catch (error) {
    console.log('esse é o erro carai =>', error);
    
    return res.status(500).json({
      message: 'deu ruim carai',
    });
  }
  
  // if (name) {
  //   const newUser = User.build({ name });

  //   if(age) {
  //     newUser.age = parseInt(age);
  //   }

  //   await newUser.save();
  // }
}

export const users = async (req: Request, res: Response) => {
  let users = await User.findAll();

  res.status(200).json(users);
}