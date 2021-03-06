/* eslint-disable no-unused-vars */

function ma10(arr) {
  const movingAvg = [];
  for (let i = 0; i < arr.length - 9; i += 1) {
    const sum = arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] + arr[i + 4]
      + arr[i + 5] + arr[i + 6] + arr[i + 7] + arr[i + 8] + arr[i + 9];
    movingAvg.push(sum / 10);
  }
  return movingAvg;
}

function maArraySetup(temps) {
  let movingAvgTemps = [];
  (temps).forEach((obs) => movingAvgTemps.push(obs.temperature));
  movingAvgTemps = ma10(movingAvgTemps);
  return (temps).map((obs, index) => ({
    temperature: movingAvgTemps[index],
    time: obs.time,
  }));
}
