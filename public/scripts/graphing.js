/* eslint-disable no-undef, no-unused-vars  */
function temperatureGraph(xArray, yArray, suffix) {
  const ctx = document.getElementById('temperatureChart');
  const data = {
    labels: xArray,
    datasets: [
      {
        label: 'Temperature',
        pointBackgroundColor: '#ff2200',
        backgroundColor: 'rgba(255, 198, 133, 0.6)',
        borderColor: '#ff6200',
        data: yArray,
      },
    ],
  };
  return new Chart(ctx, {
    type: 'line',
    data,
    options: {
      scales: {
        yAxes: [{
          ticks: {},
        }],
        xAxes: [{
          type: 'time',
          time: {
            unit: 'minute',
          },
          ticks: {
            min: Date.now() - (86400 * 1000),
            max: Date.now(),
            maxTicksLimit: xArray.length / 15,

          },
        }],
      },
      maintainAspectRatio: false,
      responsive: true,
      tooltips: {
        callbacks: {
          label(tooltipItem, lab) {
            let { label } = lab.datasets[tooltipItem.datasetIndex];
            label += ': ';
            label += Math.round(tooltipItem.value * 10) / 10;
            label += suffix;
            return label;
          },
        },
      },
    },
  });
}

function humidityGraph(xArray, yArray) {
  const ctx = document.getElementById('humidityChart');
  const data = {
    labels: xArray,
    datasets: [
      {
        label: 'Humidity',
        pointBackgroundColor: '#03a1fc',
        backgroundColor: 'rgba(140, 183, 252, 0.5)',
        borderColor: '#49bbfc',
        data: yArray,
      },
    ],
  };
  return new Chart(ctx, {
    type: 'line',
    data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 100,
            stepSize: 5,
          },
        }],
        xAxes: [{
          type: 'time',
          time: {
            unit: 'minute',
          },
          ticks: {
            min: Date.now() - (86400 * 1000),
            max: Date.now(),
            maxTicksLimit: xArray.length / 15,

          },
        }],
      },
      maintainAspectRatio: false,
      responsive: true,
      tooltips: {
        callbacks: {
          label(tooltipItem, lab) {
            let { label } = lab.datasets[tooltipItem.datasetIndex];
            label += ': ';
            label += Math.round(tooltipItem.value * 10) / 10;
            label += '%';
            return label;
          },
        },
      },
    },
  });
}
