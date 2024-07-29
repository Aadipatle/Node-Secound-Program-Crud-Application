import express from 'express';
import { getUsers, createUser,getUser,deleteUser, updateUser} from '../controller/users.js'


const route = express.Router()

route.get('/users', getUsers)
route.post('/createUser', createUser)
route.get('/user/:id', getUser)
route.delete('/user/:id', deleteUser)
route.put('/user/:id', updateUser)

export default route;