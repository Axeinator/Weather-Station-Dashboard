/* eslint-disable no-unused-vars */
/**
 * Calculates natural log of a number
 * @param {number} num Number to calculate natural log
 * @returns {number} Natural log of num
 */
function ln(num) {
  return Math.log(num) / Math.log(Math.E);
}

/**
 * Calculates dewpoint in degrees celsius
 * @param {number} temp Temperature in degrees celsius
 * @param rh {number} Relative humidity
 * @returns {number}
 */
function dewPoint(temp, rh) {
  const lambda = 243.12; // lambda value (243.12°C)
  const beta = 17.62; // beta value (17.62)
  const numerator = lambda * (ln(rh / 100) + ((beta * temp) / (lambda + temp)));
  const denominator = beta - (ln(rh / 100) + ((beta * temp) / (lambda + temp)));
  return Math.round((numerator / denominator) * 10) / 10;
}
