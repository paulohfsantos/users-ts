import { Request, Response } from 'express';
import { User } from '../models/User';

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
        .then(() => {
          res.status(200).json({
            message: 'user created',
          })
        })
        .catch(() => {
          res.status(500).json({
            message: 'user has not been created',
          })
        })
    }
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
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