import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";
import config from "../config";
import * as swaggerSchemas from './schemas'
const swaggerDefinition: OAS3Definition={
    openapi: "3.0.1",
  info: {
    title: 'Paddle API - Documentation',
    version: process.env.npm_package_version || '',
    description:
      'This service is responsible for managing the app authentications and it users'
  },
    servers: [
    {
      url: `http://localhost:${config.serverPort}`
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    },
    schemas: {
        // AUTH
      verifyTokenReqBody: swaggerSchemas.authSchema,
    //   verifyTokenRes: swaggerSchemas.auth.verifyTokenRes,
    //   unauthorizedResponse: swaggerSchemas.auth.unauthorizedResponse,
    //   logoutResponse: swaggerSchemas.auth.logoutResponse,
 
        // USER 
    }
}
}

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ['./src/modules/user/*.ts', './src/modules/auth/*.ts' ]
};

export default swaggerJSDoc(swaggerOptions);