import { Router } from 'express'
import * as HomeController from '../controllers/homeController'
import * as UserController from '../controllers/userController'

const route = Router()

// home controller
route.get('/', HomeController.home)
route.get('/ping', HomeController.ping)
// user controller
route.get('/users', UserController.users)
route.get('/user/:id', UserController.user)
route.post('/user', UserController.newUser)
route.put('/user/:id', UserController.updateUser)
route.delete('/user/:id', UserController.deleteUser)

export default route