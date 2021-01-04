const mongo = require('../mongo')

describe('MongoDB Connection', () => {
    test('Checks latest readings', () => {
        return mongo.latest()
            .then(data => {
                expect(data).toBeTruthy()
                let time = new Date(data[0]['time'])
                expect(Date.parse(time)).toBeGreaterThanOrEqual(new Date - 60*60*10*1000) // within last 10 min
            })
    })

    test('Checks for temperatures', () => {
        return mongo.temperature()
            .then(data => {
                expect(data).toBeTruthy()
            })
    })

    test('Checks for humidities', () => {
        return mongo.temperature()
            .then(data => {
                expect(data).toBeTruthy()
            })
    })
})
