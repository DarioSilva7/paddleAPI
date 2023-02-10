import { NextFunction, Request, Response, Router } from "express";
const authRoutes = Router()

authRoutes.get('/login', (req: Request, res: Response, next: NextFunction)=>{
    res.status(200).send("LOGIN")
})

export default authRoutes