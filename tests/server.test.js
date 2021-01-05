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
    it('Gets the current details page and verifies reading time', async () => {
        let response = await request(app).get('/currentConditions')
        expect(response.statusCode).toBe(200)
        let time = Date.parse(response.body[0]['time'])
        expect(time).toBeGreaterThanOrEqual(new Date - 60*60*10*1000) // within last 10 min
    })
})
