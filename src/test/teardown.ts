// import mongoose from 'mongoose';

const tearDownTests = async () => {
    // el cierre de coneccion a db debe estar en este archivo
    // dado que es lo ultimo en ejecutarse luego de todas las suits de tests
    
    // await mongoose.connection.close();
};
export default tearDownTests;