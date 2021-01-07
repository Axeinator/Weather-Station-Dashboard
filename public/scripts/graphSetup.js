/* eslint-disable no-undef, no-unused-vars */

function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function temperatureGraphSetup(temps, suffix) {
  const xArray = [];
  temps.forEach((obs) => xArray.push(new Date(obs.time)));
  const yArray = [];
  temps.forEach((obs) => yArray.push(obs.temperature));
  return temperatureGraph(xArray, yArray, suffix);
}

function humidityGraphSetup(humidity) {
  const xArray = [];
  humidity.forEach((obs) => xArray.push(new Date(obs.time)));
  const yArray = [];
  humidity.forEach((obs) => yArray.push(obs.humidity));
  return humidityGraph(xArray, yArray);
}
