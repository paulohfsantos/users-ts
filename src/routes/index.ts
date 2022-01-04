import { Router } from 'express'
import { homeController } from '../controllers/homeController'
import * as UserController from '../controllers/userController'
import { userController } from '../controllers/userController'

const route = Router()

// home controller
route.get('/', homeController.home)
route.get('/ping', homeController.ping)
// user controller
route.get('/users', UserController.users)
route.get('/user/:id', UserController.user)

route.post('/user', userController.newUser)

route.put('/user/:id', UserController.updateUser)
route.delete('/user/:id', UserController.deleteUser)

export default route