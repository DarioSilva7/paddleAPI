import { NextFunction, Request, Response, Router } from "express";
const authRoutes = Router()

authRoutes.get('/login', (req: Request, res: Response, next: NextFunction)=>{
    console.info("AQUIIIII")
    res.send("login")
})

export= authRoutes