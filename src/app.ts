import express from 'express';
import authRoutes from './modules/auth/auth.routes';
import userRoutes from './modules/user/user.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerSetup from './docs/swagger';
import pingRoutes from './modules/ping/ping.routes';

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSetup));


app.get("/ping", pingRoutes)
app.use('/auth', authRoutes)
app.use('/users', userRoutes)

export= app;