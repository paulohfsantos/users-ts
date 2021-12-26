import { Router } from 'express'
import * as HomeController from '../controllers/homeController'
import * as UserController from '../controllers/userController'

const route = Router()

route.get('/', HomeController.home)
route.get('/ping', HomeController.ping)
route.get('/users', UserController.users)
route.post('/user', UserController.newUser)

export default route