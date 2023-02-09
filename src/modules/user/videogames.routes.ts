import { NextFunction, Request, Response, Router } from "express";
const videogamesRoutes = Router()

videogamesRoutes.get('/', (req: Request, res: Response, next: NextFunction)=>{
    res.send("get games")
})

export= videogamesRoutes