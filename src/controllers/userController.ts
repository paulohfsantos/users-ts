import { NextFunction, Request, Response } from 'express';
import { User } from '../models/User';

export const newUser = async (req: Request, res: Response) => {
  let name: string = req.body.name;
  let age: number = req.body.age;

  try {
    if (name == undefined || name == '') {
      res.status(422).json({ message: 'Name is required' });
      return;
    }

    if (age == undefined || age == null) {
      res.status(422).json({ message: 'Age is required' });
      return;
    }

    if (name) {
      let username: string = name
      User.build({username}).save()

      if (age) {
        let userage: number = age
        User.build({userage}).save()
      }
    }
    // if (name && age) {
    //   // await User.create({ name, age })
    //   //   .then(res => console.log(res))
    //   //   .catch(err => console.log(err))
    //   await User.build({ name, age }).save()
    // }

    return res.status(200).json({
      message: 'usuario criado',
    })
  } catch (error) {
    console.log('esse é o erro carai =>', error);
    
    return res.status(500).json({
      message: 'deu ruim carai',
    });
  }
}

export const users = async (req: Request, res: Response) => {
  let users = await User.findAll();

  res.status(200).json(users);
}