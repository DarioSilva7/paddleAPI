import app from "./app";

const port = 9000;

const start= async()=>{
//  db connection

//  server connection
    app.listen(port,()=> {
        console.log( `Server connected on port: ${port}`)
    })
}

start()