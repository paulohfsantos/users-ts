import { Request, Response } from 'express';
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


    if (name && age) {
      await User.create({ name, age })
        .then((result) => {
          console.log(result);
          res.status(200).json({
            message: 'usuario criado',
          })
        })
        .catch(err => {
          console.log('erro aqui => ', err);
          res.status(500).json({
            message: 'usuario nao criado',
          })
        })
    }
  } catch (error) {
    console.log('esse é o erro carai =>', error);
    
    return res.status(500).json({
      message: 'deu ruim carai',
    });
  }
}

export const users = async (req: Request, res: Response) => {
  return await User.findAll()
    .then(result => res.status(200).json(result))
}