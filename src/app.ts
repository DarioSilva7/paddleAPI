import express from 'express';
import authRoutes from './modules/auth/auth.routes';
import videogamesRoutes from './modules/videogames/videogames.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerSetup from './docs/swagger';

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSetup));


app.get("/ping", (req, res)=> res.send("Pong"))
app.use('/auth', authRoutes)
app.use('/videogames', videogamesRoutes)

export= app;