import { Request, Response } from "express";
import { User } from "../models/User"

export const usersService = {
  getAllUsers: async () => {
    const users = await User.findAll();
    return { users };
  },

  createNew: async (bodyParams: Request, resParams: Response) => {
    let name: string = bodyParams.body.name;
    let age: number = bodyParams.body.age;
    
    if (name == undefined || name == '') {
      return resParams
        .status(422)
        .json({ message: 'Name is required' });
    }

    if (age == undefined || age == null) {
      return resParams
        .status(422)
        .json({ message: 'Age is required' });
    }

    if (name && age) {
      const user = await User.create({ name, age })
        .then(result => {
          resParams.status(200).json({
            message: 'user created',
          })
          return { user: result }
        })
        .catch(() => {
          resParams.status(500).json({
            message: 'user has not been created',
          })
        })

      return user;
    }
  },

  getUser: async (id: number) => {
    if (id) {
      const user = await User.findOne({ where: { id } })
        .then(result => {
          return result
        })

      return user;
    }
  },
  
  updateUser: async (id: number, bodyParams: Request, resParams: Response) => {
    let name: string = bodyParams.body.name;
    let age: number = bodyParams.body.age;

    const user = await User.update({ name, age }, { where: { id } })
      .then(result => {
        resParams.status(200).json({
          message: 'user updated',
        })
        return { user: result }
      })
      .catch(() => {
        resParams.status(500).json({
          message: 'user has not been updated',
        })
      })

    return user;
  },

  deleteUser: async (id: number, resParams: Response) => {
    if (id) {
      const user = await User.destroy({ where: { id } })
      resParams.status(200).json({
        message: 'User deleted',
      });

      return user;
    } else {
      return resParams.status(404).json({
        message: 'User not found',
      })
    }
  }
}