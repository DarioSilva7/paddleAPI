import  request from "supertest";
import app from "../../app";

describe("Auth - GET",()=>{
    test("PING - Should return status 200 with response 'PONG'",async()=>{
        const response = await request(app).get('/ping').send()
        expect(response.statusCode).toBe(200)
    })
})