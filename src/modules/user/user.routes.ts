import { NextFunction, Request, Response, Router } from "express";
import { createUser, getUserById, getUsers } from "./user.controller";
const userRoutes = Router()

userRoutes.get('/', getUsers)
userRoutes.post('/', createUser)
userRoutes.get('/:id', getUserById)


export= userRoutes