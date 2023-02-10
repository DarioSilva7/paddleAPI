import  request from "supertest";
import app from "../../app";

describe("Auth - GET",()=>{
    test("AUTH - Should return status 200 with response 'LOGIN'",async()=>{
        const response = await request(app).get('/auth/login').send()
        expect(response.statusCode).toBe(200)
        expect(response.text).toBe('LOGIN')
    })
})