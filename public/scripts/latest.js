/* eslint-disable no-undef, no-unused-vars */

function latestReading(celsius, reading) {
  const currentTime = document.getElementById('currentTime');
  const currentTemperature = document.getElementById('currentTemperature');
  const currentHumidity = document.getElementById('currentHumidity');
  const currentDewPoint = document.getElementById('currentDewPoint');
  const calculatedDewPoint = dewPoint(toCelsius(reading[0].temperature), reading[0].humidity);
  currentTime.innerHTML = new Date(reading[0].time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  if (celsius) {
    currentTemperature.innerHTML = (`${toCelsius(reading[0].temperature).toFixed(1).toString()}°C`);
    currentDewPoint.innerHTML = `${calculatedDewPoint}°C`;
  } else {
    currentTemperature.innerHTML = (`${reading[0].temperature.toFixed(1).toString()}°F`);
    currentDewPoint.innerHTML = `${toFahrenheit(calculatedDewPoint)}°F`;
  }
  currentHumidity.innerHTML = (`${reading[0].humidity.toFixed(1).toString()}%`);
}
