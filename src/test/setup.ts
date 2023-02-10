beforeAll(async () => {
    try { 
        console.log("🚀 ~ file: setup.ts:10 ~ beforeAll ~ try")
        // await mongoose.connect(getTestMongoUrl());
        // logger.info('Connected to testing MongoDb ');
    } catch (error) {    
        console.log("🚀 ~ file: setup.ts:7 ~ beforeAll ~ error", error)
        // logger.info(`Failed to connect to MongoDb ${error}`);
    }
})
