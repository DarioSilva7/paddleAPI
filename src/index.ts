import app from "./app";
import config from './config/index'
const port = config.serverPort || 9000;

const start= async()=>{
//  db connection

//  server connection
    app.listen(port,()=> {
        console.log( `Server connected on port: ${port}`)
    })
}

start()