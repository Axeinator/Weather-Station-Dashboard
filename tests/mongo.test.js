const mongo = require('../mongo');

describe('MongoDB Connection', () => {
  test('Checks latest readings', () => mongo.latest()
    .then((data) => {
      expect(data).toBeTruthy();
      const time = Date.parse(data[0].time);
      expect(time).toBeGreaterThanOrEqual(new Date() - 60 * 60 * 10 * 1000); // within last 10 min
    }));

  test('Checks for temperatures', () => mongo.temperature()
    .then((data) => {
      expect(data).toBeTruthy();
    }));

  test('Checks for humidities', () => mongo.temperature()
    .then((data) => {
      expect(data).toBeTruthy();
    }));
});
