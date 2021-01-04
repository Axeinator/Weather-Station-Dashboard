const app = require('../index')
const request = require('supertest')

describe('Web Server', () => {
    it('Gets the main charts page', async () => {
        let response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
    })
    it('Gets the info page', async () => {
        let response = await request(app).get('/info')
        expect(response.statusCode).toBe(200)
    })
      //TODO current info page check if time is in correct range (8 min ish)
})