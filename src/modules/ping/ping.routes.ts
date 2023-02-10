import { Request, Response, Router } from "express"
const pingRoutes= Router()

pingRoutes.get('/ping',(req: Request, res: Response)=> res.status(200).send("PONG"))

export default pingRoutes;